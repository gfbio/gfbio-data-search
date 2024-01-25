// Importing required modules
const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const session = require("express-session");
const axios = require("axios"); // Ensure this is used if required in other parts of your application
const compression = require("compression");

// Initialize express app
const app = express();

// Enable middleware globally
//
// compression
app.use(compression());
// json body parsing
app.use(express.json()); // Apply express.json() middleware to all routes

// Session configuration
const memoryStore = new session.MemoryStore();
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Ensure this is set in your .env file
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

// Keycloak configuration
const keycloak = require("./config/keycloak.config.js").initKeycloak(
  memoryStore
);
app.use(keycloak.middleware({ logout: "/logoff" }));

// Basic route
app.get("/", (req, res) => {
  res.send("Server is up!");
});

// Swagger configuration
const swaggerDefinition = {
  info: {
    title: "GFBio/NFDI4Biodiversity Search API",
    version: "1.0.0",
    description: "Endpoints for dataset search",
  },
  host: `${process.env.HOST}:${process.env.APP_PORT}`,
  basePath: "/",
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Assuming all route files are in the routes directory
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Database connection
const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Database connection and synchronization successful.");
  })
  .catch((err) => {
    console.error("Database connection and synchronization failed:", err);
  });

// Routes
require("./routes/basket.route")(app);
var elastic_gfbio = require("./gfbio");
app.use("/gfbio", elastic_gfbio);

// Start server
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Global error handling (optional, add if needed)
// app.use((err, req, res, next) => {
//     // Error handling logic here
// });

module.exports = app;
