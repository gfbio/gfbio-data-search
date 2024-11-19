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

const appRoot = require("app-root-path");
const {
  ELASTIC_INDEX_URL,
  ELASTIC_INDEX_NAME,
  ELASTIC_INDEX_PORT,
} = require(appRoot + "/src/config/environment");

const ELASTIC_INDEX_SEARCH_URL = `${ELASTIC_INDEX_URL}:${ELASTIC_INDEX_PORT}/${ELASTIC_INDEX_NAME}/_search`;

// Generate a consistent cache key
function generateCacheKey(req) {
  const payload = {
    path: req.path,
    method: req.method,
    params: req.method === "POST" ? req.body : req.query,
    headers: {
      // Only include relevant headers that might affect the response
      accept: req.headers.accept,
      'accept-language': req.headers['accept-language'],
    }
  };
  
  return crypto
    .createHash('sha256')
    .update(JSON.stringify(payload))
    .digest('hex');
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

module.exports = cacheMiddleware;
