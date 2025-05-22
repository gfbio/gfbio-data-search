const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const appRoot = require("app-root-path");
const { HOST, APP_PORT } = require(appRoot + "/src/config/environment"); // Import environment

const swaggerDefinition = {
  info: {
    title: "GFBio/NFDI4Biodiversity Search API",
    version: "1.0.0",
    description: "Endpoints for dataset search",
  },
  host: `${HOST}:${APP_PORT}`, // Host and port where your API is running
  basePath: "/", // Base path for your API
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Specify the paths to your API route files
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = {
  serve: swaggerUi.serve, // Middleware to serve Swagger UI
  setup: swaggerUi.setup(swaggerSpec), // Middleware to set up Swagger UI
};
