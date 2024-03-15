// Importing the suggest service for making suggestion queries.
const suggestService = require("../services/suggest.service");

/**
 * Controller to get keyword suggestions for a given search term using the Pangaea suggestion service.
 * It receives the search term from the request body, fetches suggestions, and sends them back to the client.
 *
 * @param {Object} req - The request object, expected to contain the term for which suggestions are needed.
 * @param {Object} res - The response object used to send back the fetched suggestions.
 */
exports.suggestPan = async (req, res) => {
  try {
    // Extract the search term from the request body.
    const term = req.body.term;

    // Fetch keyword suggestions based on the provided term.
    const suggestions = await suggestService.getSuggestionsPan(term);

    // Send the suggestions back to the client with a 200 OK status.
    res.status(200).json(suggestions);
  } catch (error) {
    // Log the error and send back a 500 Internal Server Error status with the error message.
    console.error("Error in suggestPan:", error);
    res
      .status(500)
      .json({ message: "Error getting suggestions", error: error.message });
  }
};

/**
 * Controller to get terminology suggestions for a given search term using a specialized terminology suggestion service.
 * This function is similar to suggestPan but is specifically for terminology-related suggestions.
 *
 * @param {Object} req - The request object, expected to contain the term for which terminology suggestions are needed.
 * @param {Object} res - The response object used to send back the fetched terminology suggestions.
 */
exports.suggestTer = async (req, res) => {
  try {
    // Extract the search term from the request body.
    const term = req.body.term;

    // Fetch terminology suggestions based on the provided term.
    const suggestions = await suggestService.getSuggestionsTer(term);

    // Send the terminology suggestions back to the client with a 200 OK status.
    res.status(200).json(suggestions);
  } catch (error) {
    // Log the error and send back a 500 Internal Server Error status with the error message.
    console.error("Error in suggestTer:", error);
    res
      .status(500)
      .json({
        message: "Error getting terminology suggestions",
        error: error.message,
      });
  }
};
