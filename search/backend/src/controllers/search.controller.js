const searchService = require("../services/search.service");

/**
 * Handle search requests.
 * @param {Request} req - Express Request object.
 * @param {Response} res - Express Response object.
 */
exports.search = async (req, res) => {
  try {
    // Extract query parameters from the request body
    const { queryterm, filter, from, size } = req.body;

    // Validate and parse parameters as needed
    const parsedFrom = parseInt(from, 10) || 0;
    const parsedSize = parseInt(size, 10) || 10;

    // Call the search service to execute the search
    const searchData = await searchService.executeSearch(
      queryterm,
      filter,
      parsedFrom,
      parsedSize
    );

    // Send the search results as JSON response
    res.status(200).json(searchData);
  } catch (error) {
    console.error("Search error:", error);

    // Handle search errors and send an error response with details
    res.status(500).json({
      message: "Error executing search",
      error: error.message,
    });
  }
};
