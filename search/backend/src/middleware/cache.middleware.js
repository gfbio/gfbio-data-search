const NodeCache = require("node-cache");
const axiosService = require("../config/axios.config");
const crypto = require('crypto');

// Configure cache with standard TTL and max size
const myCache = new NodeCache({
  stdTTL: 3600, // Default TTL of 1 hour
  checkperiod: 600, // Check for expired keys every 10 minutes
  maxKeys: 1000, // Limit maximum number of keys
  useClones: false // Improve performance by not cloning objects
});

const queryMap = new Map();
const popularQueries = new Map(); // Track query popularity

const appRoot = require("app-root-path");
const {
  ELASTIC_INDEX_URL,
  ELASTIC_INDEX_NAME,
  ELASTIC_INDEX_PORT,
} = require(appRoot + "/src/config/environment");

const ELASTIC_INDEX_SEARCH_URL = `${ELASTIC_INDEX_URL}:${ELASTIC_INDEX_PORT}/${ELASTIC_INDEX_NAME}/_search`;
const TOP_QUERIES_TO_CACHE = 50; // Number of top queries to keep in default cache
const POPULARITY_DECAY_FACTOR = 0.95; // Decay factor for query popularity (favors recent queries)

// Generate a consistent cache key
function generateCacheKey(req) {
  const payload = {
    path: req.path,
    method: req.method,
    params: req.method === "POST" ? req.body : req.query,
    headers: {
      accept: req.headers.accept,
      'accept-language': req.headers['accept-language'],
    }
  };
  
  return crypto
    .createHash('sha256')
    .update(JSON.stringify(payload))
    .digest('hex');
}

// Update query popularity
function updateQueryPopularity(key, query) {
  const now = Date.now();
  const queryInfo = popularQueries.get(key) || { 
    count: 0, 
    lastAccessed: now,
    query: query
  };
  
  // Apply decay factor based on time since last access
  const daysSinceLastAccess = (now - queryInfo.lastAccessed) / (1000 * 60 * 60 * 24);
  queryInfo.count = (queryInfo.count * Math.pow(POPULARITY_DECAY_FACTOR, daysSinceLastAccess)) + 1;
  queryInfo.lastAccessed = now;
  
  popularQueries.set(key, queryInfo);
}

// Pre-cache popular queries
async function updateDefaultCache() {
  try {
    // Sort queries by popularity
    const sortedQueries = Array.from(popularQueries.entries())
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, TOP_QUERIES_TO_CACHE);

    console.log(`Updating default cache with top ${sortedQueries.length} queries`);

    // Pre-cache top queries
    for (const [key, queryInfo] of sortedQueries) {
      if (!myCache.has(key)) {
        try {
          const response = await axiosService.post(ELASTIC_INDEX_SEARCH_URL, queryInfo.query);
          const cacheEntry = {
            data: response.data,
            timestamp: Date.now()
          };
          myCache.set(key, cacheEntry);
          console.log(`Pre-cached query: ${key}`);
        } catch (error) {
          console.error(`Failed to pre-cache query ${key}:`, error.message);
        }
      }
    }
  } catch (error) {
    console.error('Error updating default cache:', error);
  }
}

// Validate cache entry
function isValidCacheEntry(entry) {
  return entry && 
         typeof entry === 'object' && 
         !Array.isArray(entry) &&
         entry.data !== undefined &&
         entry.timestamp !== undefined;
}

const cacheMiddleware = (allowedRoutes, duration = 3600) => {
  return async (req, res, next) => {
    const currentRoute = req.originalUrl;

    if (!allowedRoutes.includes(currentRoute)) {
      return next();
    }

    const key = generateCacheKey(req);
    
    try {
      // Update query popularity
      if (req.method === "POST") {
        updateQueryPopularity(key, req.body);
      }
      
      const cachedEntry = myCache.get(key);
      
      if (cachedEntry && isValidCacheEntry(cachedEntry)) {
        // Update access statistics
        const stats = queryMap.get(key) || { count: 0, lastAccessed: Date.now() };
        stats.count += 1;
        stats.lastAccessed = Date.now();
        queryMap.set(key, stats);
        
        console.log(`Cache hit for key: ${key}`);
        return res.json(cachedEntry.data);
      }
      
      // Store original send method
      const originalSend = res.send;
      
      // Override send method to cache response
      res.send = function(body) {
        try {
          const cacheEntry = {
            data: JSON.parse(body),
            timestamp: Date.now()
          };
          
          myCache.set(key, cacheEntry, duration);
          
          // Initialize or update query statistics
          queryMap.set(key, {
            count: 1,
            lastAccessed: Date.now(),
            params: req.params
          });
          
          console.log(`Cache set for key: ${key}`);
        } catch (err) {
          console.error('Error caching response:', err);
        }
        
        originalSend.call(this, body);
      };
      
      next();
    } catch (err) {
      console.error('Cache middleware error:', err);
      next();
    }
  };
};

// Periodic cache maintenance
function maintainCache() {
  try {
    const now = Date.now();
    const stats = Array.from(queryMap.entries());
    
    // Remove entries that haven't been accessed in 24 hours
    stats.forEach(([key, value]) => {
      if (now - value.lastAccessed > 24 * 60 * 60 * 1000) {
        queryMap.delete(key);
        myCache.del(key);
      }
    });
    
    // If cache is near capacity, remove least accessed entries
    if (myCache.keys().length > myCache.options.maxKeys * 0.9) {
      const sortedKeys = stats
        .sort((a, b) => a[1].count - b[1].count)
        .map(([key]) => key);
      
      // Remove bottom 10% of least accessed entries
      const keysToRemove = sortedKeys.slice(0, Math.floor(sortedKeys.length * 0.1));
      keysToRemove.forEach(key => {
        myCache.del(key);
        queryMap.delete(key);
      });
    }
  } catch (err) {
    console.error('Cache maintenance error:', err);
  }
}

// Run cache maintenance every hour
setInterval(maintainCache, 60 * 60 * 1000);

// Update default cache every 6 hours
setInterval(updateDefaultCache, 6 * 60 * 60 * 1000);

// Initial default cache update
updateDefaultCache();

module.exports = cacheMiddleware;
