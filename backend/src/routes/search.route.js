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

module.exports = router;
