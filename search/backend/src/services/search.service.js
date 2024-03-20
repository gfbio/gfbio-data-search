// Import utility functions and Elasticsearch client configuration.
const {
  getFilteredQuery,
  applyBoost,
  getCompleteQuery,
} = require("../utils/query.utils");
const esClient = require("../config/elasticsearch.config");

const appRoot = require("app-root-path");
const { ELASTIC_INDEX_NAME } = require(appRoot + "/src/config/environment"); // Import environment

/**
 * Executes a search query against an Elasticsearch index.
 *
 * This function constructs a search query based on input parameters,
 * applies optional filters and boosting, and executes the query
 * using the Elasticsearch client. The function is designed to be used
 * with pagination and can handle optional filtering.
 *
 * @param {string} queryterm The keyword or phrase to search for.
 * @param {string[]} filter Optional filters to refine the search results.
 * @param {number} from The starting index for search results, used for pagination.
 * @param {number} size The number of search results to return, used for pagination.
 * @returns {Promise<Object>} A promise that resolves to the raw search results from Elasticsearch.
 * @throws {Error} If there is an error during the search query execution.
 */
exports.executeSearch = async (queryterm, filter, from, size) => {
  try {
    // Construct the Elasticsearch query using utility functions.
    const filteredQuery = getFilteredQuery(queryterm, filter); // Apply any filters provided.
    const boostedQuery = applyBoost(filteredQuery); // Apply boosting to the query if necessary.
    const finalQuery = getCompleteQuery(boostedQuery, from, size); // Finalize the query with pagination.

    // Prepare the search query for Elasticsearch.
    const searchQuery = {
      index: ELASTIC_INDEX_NAME, // Use the index name from the environment variable.
      from, // Starting index for search results (for pagination).
      size, // Number of search results to return (for pagination).
      body: finalQuery, // The constructed query from utility functions.
    };

    // Execute the search query using the Elasticsearch client and return the raw response body.
    const { body } = await esClient.search(searchQuery);
    return body; // Return the full response body to be handled by the caller.
  } catch (error) {
    // Log and rethrow the error to be handled by the caller.
    console.error(
      "Error executing search query with Elasticsearch client:",
      error
    );
    throw error;
  }
};
