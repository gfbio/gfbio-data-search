const searchService = require("../services/search.service");
const { BadRequestError } = require("../errors/costum.errors");

/**
 * Handle search requests.
 * @param {Request} req - Express Request object.
 * @param {Response} res - Express Response object.
 */
exports.search = async (req, res) => {
  try {
    // Extract query parameters from the request body
    const { queryterm, filter, from, size } = req.body;

    // Validate queryterm: It must be a string
    if (typeof queryterm !== "string") {
      throw new BadRequestError("Invalid queryterm parameter");
    }

    // Validate 'from' and 'size' (both are optional)
    const parsedFrom = isNaN(parseInt(from, 10))
      ? undefined
      : parseInt(from, 10);
    const parsedSize = isNaN(parseInt(size, 10))
      ? undefined
      : parseInt(size, 10);

    // Check if 'from' or 'size' are provided but not valid integers
    if (
      (from && parsedFrom === undefined) ||
      (size && parsedSize === undefined)
    ) {
      throw new BadRequestError("Invalid from or size parameter");
    }

    // Call the search service to execute the search
    const searchData = await searchService.executeSearch(
      queryterm,
      filter,
      parsedFrom || 0, // Use default value if undefined
      parsedSize || 10 // Use default value if undefined
    );

    // Send the search results as JSON response
    res.status(200).json(searchData);
  } catch (error) {
    console.error("Search error:", error);

    if (error.statusCode) {
      // Custom error with a specific status code
      res.status(error.statusCode).json({
        message: error.message,
      });
    } else {
      // Handle other errors with a default status code
      res.status(500).json({
        message: "Error executing search",
        error: error.message,
      });
    }
  }
};
