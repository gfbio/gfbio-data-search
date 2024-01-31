const suggestService = require("../services/suggest.service");

/**
 * Get keyword suggestions for a given search term.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
exports.suggestPan = async (req, res) => {
  try {
    const term = req.body.term;
    const suggestions = await suggestService.getSuggestionsPan(term);

    res.status(200).json(suggestions);
  } catch (error) {
    console.error("Error in suggestPan:", error);
    res
      .status(500)
      .json({ message: "Error getting suggestions", error: error.message });
  }
};

/**
 * Get terminology suggestions for a given search term.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
exports.suggestTer = async (req, res) => {
  try {
    const term = req.body.term;
    const suggestions = await suggestService.getSuggestionsTer(term);

    res.status(200).json(suggestions);
  } catch (error) {
    console.error("Error in suggestTer:", error);
    res
      .status(500)
      .json({ message: "Error getting suggestions", error: error.message });
  }
};
