const NodeCache = require("node-cache");
const axiosService = require("../config/axios.config");
const myCache = new NodeCache();
const queryMap = new Map();

const appRoot = require("app-root-path");
const {
  ELASTIC_INDEX_URL,
  ELASTIC_INDEX_NAME,
  ELASTIC_INDEX_PORT,
} = require(appRoot + "/src/config/environment"); // Import environment

// https://elasticsearch.gfbio.dev/dataportal-gfbio/_search
const ELASTIC_INDEX_SEARCH_URL = `${ELASTIC_INDEX_URL}:${ELASTIC_INDEX_PORT}/${ELASTIC_INDEX_NAME}/_search`;

const cacheMiddleware = (allowedRoutes, duration) => {
  return (req, res, next) => {
    // Check if the current route is in the allowedRoutes array
    const currentRoute = req.originalUrl;

    if (!allowedRoutes.includes(currentRoute)) {
      // If not in allowedRoutes, skip caching and proceed to the next middleware
      return next();
    }
    const key = JSON.stringify({
      path: req.path,
      method: req.method,
      params: req.method === "POST" ? req.body : req.query,
    });

    const cacheEntry = queryMap.get(key) || { count: 0, params: req.params };
    cacheEntry.count += 1;
    queryMap.set(key, cacheEntry); // Update the map with the new count

    const cachedResponse = myCache.get(key);
    if (cachedResponse) {
      console.log(`Cache hit for key: ${key}`);
      return res.send(cachedResponse);
    } else {
      console.log(`Cache miss for key: ${key}`);
    }

    res.originalSend = res.send;
    res.send = (body) => {
      if (duration) {
        myCache.set(key, body, duration);
      } else {
        myCache.set(key, body);
      }
      console.log(`Cache set for key: ${key}`);
      res.originalSend(body);
    };
    next();
  };
};

function clearCacheAtMidnight() {
  const now = new Date();
  const midnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0
  );
  const timeUntilMidnight = midnight.getTime() - now.getTime();

  setTimeout(() => {
    console.log("Clearing cache and re-executing queries...");
    console.log(`Cache size before clearing: ${myCache.keys().length} items`);
    myCache.flushAll();

    // Sort the queries based on access count
    const sortedQueries = Array.from(queryMap).sort((a, b) => {
      return b[1].count - a[1].count; // Sort based on count
    });

    sortedQueries.forEach(([queryKey, queryValue]) => {
      const query = JSON.parse(queryKey);
      console.log("==== debug the recaching ====");
      console.log("-- the query ---");
      console.log(query);
      console.log("-- the query ---");
      let url;
      console.log("-- the url ---");
      console.log(url);
      console.log("-- the url ---");
      switch (query.path) {
        case "/search":
          url = ELASTIC_INDEX_SEARCH_URL;
          break;
        // Add cases for other routes as needed
      }

      if (url) {
        const axiosMethod = query.method.toLowerCase();
        if (axiosService[axiosMethod]) {
          axiosService[axiosMethod](url, query.params)
            .then((response) => {
              myCache.set(queryKey, response.data);
              console.log(`Re-executed and cached query: ${queryKey}`);
            })
            .catch((error) =>
              console.error(`Error re-executing query: ${queryKey}`, error)
            );
        }
      }
    });
    console.log("==== debug the recaching ====");
    queryMap.clear(); // Clear the map
    clearCacheAtMidnight();
  }, timeUntilMidnight);
}

clearCacheAtMidnight();

module.exports = cacheMiddleware;
