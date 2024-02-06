// Import necessary modules
const express = require("express");

// Middleware and configuration imports
const compressionMiddleware = require("./config/compression.config");
const httpLoggingMiddleware = require("./config/morgan.config");
const corsMiddleware = require("./config/cors.config");
const parserMiddleware = require("./config/parser.config");
const cacheMiddleware = require("./middleware/cache.middleware");
const cacheConfig = require("./config/cache.config");
const errorMiddleware = require("./middleware/error.middleware");
const sessionMiddleware = require("./config/sessionSetup.config");

// Swagger documentation imports
const { serve, setup } = require("./config/swagger.config");

// Routes imports
const basketRoutes = require("./routes/basket.route");
const basketApiRoutes = require("./routes/basketApi.route");
const collectionRoutes = require("./routes/collection.route");
const searchRoutes = require("./routes/search.route");
const semanticSearchRoutes = require("./routes/semanticSearch.route");
const suggestRoutes = require("./routes/suggest.route");

const app = express();

// Middleware setup
app.use(compressionMiddleware); // Compression middleware for response compression
app.use(httpLoggingMiddleware); // HTTP request logging middleware
app.use(corsMiddleware); // Cross-origin resource sharing middleware
app.use(parserMiddleware.jsonParser); // JSON request body parser middleware
app.use(parserMiddleware.urlencodedParser); // URL-encoded request body parser middleware
app.use(cacheMiddleware(cacheConfig.allowedRoutes)); // Cache middleware for specific routes

// setup session
sessionMiddleware.configureSession(app);
sessionMiddleware.configureKeycloak(app);

// Swagger documentation setup
app.use("/api-docs", serve, setup);

// Basic route to check if the server is running
app.get("/", (req, res) => res.json({ message: "Server is up!" }));

// Application routes
app.use("/gfbio", collectionRoutes); // Collection-related routes under /gfbio
app.use("/gfbio", searchRoutes); // Search-related routes under /gfbio
app.use("/gfbio", semanticSearchRoutes); // Semantic search routes under /gfbio
app.use("/gfbio", suggestRoutes); // Suggest routes under /gfbio
app.use("/gfbio", basketRoutes); // Basket routes under /gfbio
app.use("/api/baskets", basketApiRoutes); // API routes for baskets

// Global Error Handling Middleware
app.use(errorMiddleware);

module.exports = app;
