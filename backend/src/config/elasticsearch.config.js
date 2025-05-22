const { Client } = require("@elastic/elasticsearch");

const appRoot = require("app-root-path");
const { ELASTIC_INDEX_URL, ELASTIC_INDEX_PORT } = require(appRoot +
  "/src/config/environment"); // Import environment

// Combine the URL and port environment variables to construct the full connection string
const esFullUrl = `${ELASTIC_INDEX_URL}:${ELASTIC_INDEX_PORT}`;

const esClient = new Client({
  node: esFullUrl, // Use the combined URL and port for the node address
});

module.exports = esClient;
