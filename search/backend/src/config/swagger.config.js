const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  info: {
    title: "GFBio/NFDI4Biodiversity Search API",
    version: "1.0.0",
    description: "Endpoints for dataset search",
  },
  host: `${process.env.HOST}:${process.env.APP_PORT}`, // Host and port where your API is running
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
