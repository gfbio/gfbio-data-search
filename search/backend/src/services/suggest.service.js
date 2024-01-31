const axiosService = require("../config/axios.config");
const Pangaea_Suggest_URL = process.env.PANGAEA_SUGGEST_URL;
const TERMINOLOGY_SUGGEST_URL = process.env.TERMINOLOGY_SUGGEST_URL;

/**
 * Get keyword suggestions using the Pangaea suggest service.
 *
 * @param {string} term - The search term for suggestions.
 * @returns {Promise<Object>} - A promise that resolves to the suggestions.
 */
exports.getSuggestionsPan = async (term) => {
  try {
    const data = {
      suggest: {
        text: term,
        completion: {
          field: "suggest",
          size: 12,
        },
      },
    };

    const response = await axiosService.post(Pangaea_Suggest_URL, data);
    return response.data;
  } catch (error) {
    console.error("Error in getSuggestionsPan:", error);
    throw error;
  }
};

/**
 * Get terminology suggestions using the terminology suggest service.
 *
 * @param {string} term - The search term for terminology suggestions.
 * @returns {Promise<Object>} - A promise that resolves to the suggestions.
 */
exports.getSuggestionsTer = async (term) => {
  try {
    const url = `${TERMINOLOGY_SUGGEST_URL}?query=${encodeURIComponent(
      term
    )}*&match_type=exact`;
    const response = await axiosService.get(url);
    return response.data;
  } catch (error) {
    console.error("Error in getSuggestionsTer:", error);
    throw error;
  }
};
