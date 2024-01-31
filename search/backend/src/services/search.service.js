const axiosService = require("../config/axios.config");
const {
  getFilteredQuery,
  applyBoost,
  getCompleteQuery,
} = require("../utils/query.utils");

const Pangaea_URL = process.env.PANGAEA_URL; // Ensure this URL is configured in your environment

/**
 * Executes a search query against Elasticsearch.
 *
 * @param {string} queryterm - The keyword to search for.
 * @param {string[]} filter - Optional filters to apply to the search.
 * @param {number} from - The starting index for search results (used for pagination).
 * @param {number} size - The number of search results to return.
 * @returns {Promise<Object>} - A Promise that resolves to the search results.
 * @throws {Error} - If there's an error during the search query execution.
 */
exports.executeSearch = async (queryterm, filter, from, size) => {
  try {
    // Build the query with filters and boosting
    const filteredQuery = getFilteredQuery(queryterm, filter);
    const boostedQuery = applyBoost(filteredQuery);
    const completeQuery = getCompleteQuery(boostedQuery, from, size);

    // Configuration for the Axios request
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Perform the search using the Axios instance
    const response = await axiosService.post(
      Pangaea_URL,
      completeQuery,
      config
    );

    // Assuming the response structure fits your needs, otherwise adjust accordingly
    return response.data;
  } catch (error) {
    console.error("Error executing search query:", error);
    throw error; // Rethrow the error to be handled by the controller
  }
};
