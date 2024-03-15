const { Client } = require("@elastic/elasticsearch");

// Combine the URL and port environment variables to construct the full connection string
const esFullUrl = `${process.env.ELASTIC_INDEX_URL}:${process.env.ELASTIC_INDEX_PORT}`;

const esClient = new Client({
  node: esFullUrl, // Use the combined URL and port for the node address
});

module.exports = esClient;
