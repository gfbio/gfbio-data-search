const searchService = require("../services/search.service");

/**
 * Handle search requests (combined results and stats).
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

/**
 * Handle search requests for results only (without stats/aggregations).
 * @param {Request} req - Express Request object.
 * @param {Response} res - Express Response object.
 */
exports.searchResultsOnly = async (req, res) => {
  try {
    // Extract query parameters from the request body
    const { queryterm, filter, from, size } = req.body;

    // Validate and parse parameters as needed
    const parsedFrom = parseInt(from, 10) || 0;
    const parsedSize = parseInt(size, 10) || 10;

    // Call the search service to execute the search without aggregations
    const searchData = await searchService.executeSearchWithoutAggs(
      queryterm,
      filter,
      parsedFrom,
      parsedSize
    );

    // Send the search results as JSON response
    res.status(200).json(searchData);
  } catch (error) {
    console.error("Search results error:", error);

    // Handle search errors and send an error response with details
    res.status(500).json({
      message: "Error executing search for results",
      error: error.message,
    });
  }
};

/**
 * Handle requests for search stats/aggregations only.
 * @param {Request} req - Express Request object.
 * @param {Response} res - Express Response object.
 */
exports.searchStatsOnly = async (req, res) => {
  try {
    // Extract query parameters from the request body
    const { queryterm, filter } = req.body;

    // Call the search service to execute the stats calculation only
    const statsData = await searchService.executeStatsOnly(
      queryterm,
      filter
    );

    // Send the stats results as JSON response
    res.status(200).json(statsData);
  } catch (error) {
    console.error("Search stats error:", error);

    // Handle search errors and send an error response with details
    res.status(500).json({
      message: "Error executing search for stats",
      error: error.message,
    });
  }
};
