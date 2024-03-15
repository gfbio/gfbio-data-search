// External dependencies and configuration files
const axiosService = require("../config/axios.config"); // Axios configuration for HTTP requests
const esClient = require("../config/elasticsearch.config"); // Elasticsearch client configuration
const TERMINOLOGY_SUGGEST_URL = process.env.TERMINOLOGY_SUGGEST_URL; // Environment variable for the terminology suggestion service URL

/**
 * Fetches keyword suggestions from Elasticsearch based on the provided term.
 *
 * This function uses the Elasticsearch suggest feature to find keyword suggestions.
 * It queries a specific field within an Elasticsearch index and returns a list of suggestions.
 *
 * @param {string} term The user-provided term to find suggestions for.
 * @returns {Promise<Object[]>} A promise that resolves to an array of suggestion objects.
 */
exports.getSuggestionsPan = async (term) => {
  try {
    // Perform the search query against Elasticsearch
    const response = await esClient.search({
      index: process.env.ELASTIC_INDEX_NAME, // The name of the Elasticsearch index
      body: {
        suggest: {
          text: term,
          my_suggestion: {
            // The suggester configuration
            completion: {
              field: "suggest", // Field in the index to generate suggestions from
              size: 12, // Number of suggestions to return
            },
          },
        },
      },
    });

    // Extract and return the suggestions from the response
    return response.body.suggest.my_suggestion[0].options;
  } catch (error) {
    // Log and re-throw the error for the caller to handle
    console.error("Error in getSuggestionsPan:", error);
    throw error;
  }
};

/**
 * Fetches terminology suggestions from a separate terminology suggest service.
 *
 * This function sends a GET request to a predefined URL with the user-provided term
 * to retrieve terminology suggestions. It is intended for specialized terminology lookups.
 *
 * @param {string} term The user-provided term to find terminology suggestions for.
 * @returns {Promise<Object[]>} A promise that resolves to an array of terminology suggestion objects.
 */
exports.getSuggestionsTer = async (term) => {
  try {
    // Construct the full URL for the terminology service with the query term
    const url = `${TERMINOLOGY_SUGGEST_URL}?query=${encodeURIComponent(
      term
    )}*&match_type=exact`;

    // Send a GET request to the terminology service
    const response = await axiosService.get(url);

    // Return the retrieved suggestions
    return response.data;
  } catch (error) {
    // Log and re-throw the error for the caller to handle
    console.error("Error in getSuggestionsTer:", error);
    throw error;
  }
};
