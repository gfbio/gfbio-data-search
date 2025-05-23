const router = require("express").Router();

const searchController = require("../controllers/search.controller");

// Router for Search, Suggestions, and Collections
/**
 * @description This router handles endpoints related to search, suggestions, and collections.
 * @name Search, Suggestions, and Collections Router
 * @path /search, /semantic-search, /broad, /narrow, /suggest-pan, /suggest-ter, /collection, /collection-update
 */

// Search Endpoint
/**
 * @swagger
 * /search:
 *   post:
 *     summary: Performs a search based on the given query term and filters.
 *     tags: [Search]
 *     description: This endpoint performs a search operation using a keyword, optional filters, and pagination parameters. It returns search results based on the specified criteria.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - queryterm
 *             properties:
 *               queryterm:
 *                 type: string
 *                 description: The keyword to search for.
 *               filter:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Optional filters to apply to the search.
 *               from:
 *                 type: integer
 *                 default: 0
 *                 description: The starting index for search results (used for pagination).
 *               size:
 *                 type: integer
 *                 default: 10
 *                 description: The number of search results to return.
 *     responses:
 *       200:
 *         description: Search results returned successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     description: A search result item.
 *       500:
 *         description: Server error or issue with the search operation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                 err:
 *                   type: object
 *                   description: Details of the error.
 */
router.post("/search", searchController.search);

/**
 * @swagger
 * /search/results:
 *   post:
 *     summary: Performs a search but returns only the results without aggregations/stats.
 *     tags: [Search]
 *     description: This endpoint performs a search operation but returns only the results without facets or aggregations, providing faster response times.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - queryterm
 *             properties:
 *               queryterm:
 *                 type: string
 *                 description: The keyword to search for.
 *               filter:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Optional filters to apply to the search.
 *               from:
 *                 type: integer
 *                 default: 0
 *                 description: The starting index for search results (used for pagination).
 *               size:
 *                 type: integer
 *                 default: 10
 *                 description: The number of search results to return.
 *     responses:
 *       200:
 *         description: Search results returned successfully without aggregations.
 *       500:
 *         description: Server error or issue with the search operation.
 */
router.post("/search/results", searchController.searchResultsOnly);

/**
 * @swagger
 * /search/stats:
 *   post:
 *     summary: Returns only aggregation/stats data without actual search results.
 *     tags: [Search]
 *     description: This endpoint calculates and returns only facet statistics, allowing for separate loading of facets independently from search results.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - queryterm
 *             properties:
 *               queryterm:
 *                 type: string
 *                 description: The keyword to search for.
 *               filter:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Optional filters to apply to the stats calculation.
 *     responses:
 *       200:
 *         description: Aggregation stats returned successfully.
 *       500:
 *         description: Server error or issue with the stats calculation.
 */
router.post("/search/stats", searchController.searchStatsOnly);

module.exports = router;
