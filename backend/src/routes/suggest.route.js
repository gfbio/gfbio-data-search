const router = require("express").Router();
const suggestController = require("../controllers/suggest.controller");

// Suggestion endpoints

/**
 * POST /suggest-pan
 * Suggestion service for dataset search using the PAN service.
 * Provides suggestions for dataset search based on the given term using the PAN service.
 * @swagger
 * /suggest-pan:
 *   post:
 *     summary: Get dataset search suggestions using the PAN service.
 *     tags: [Search Suggestions]
 *     description: This endpoint provides suggestions for dataset search based on the given term using the PAN service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - term
 *             properties:
 *               term:
 *                 type: string
 *                 description: The search term for which suggestions are needed.
 *     responses:
 *       200:
 *         description: Dataset search suggestions retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       500:
 *         description: Server error or issue with retrieving suggestions.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   description: Details of the error.
 */
router.post("/suggest-pan", suggestController.suggestPan);

/**
 * POST /suggest-ter
 * Terminology Suggest service for semantic search.
 * Provides query term suggestions for semantic search using the Terminology service.
 * @swagger
 * /gfbio/suggest-ter:
 *   post:
 *     summary: Get query term suggestions for semantic search using the Terminology service.
 *     tags: [Semantic Search]
 *     description: This endpoint provides query term suggestions for semantic search based on the given characters using the Terminology service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - term
 *             properties:
 *               term:
 *                 type: string
 *                 description: The characters for which suggestions are needed.
 *                 example: quer
 *     responses:
 *       200:
 *         description: Query term suggestions retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 suggest:
 *                   type: array
 *                   items:
 *                     type: string
 *       500:
 *         description: Server error or issue with retrieving suggestions.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   description: Details of the error.
 */
router.post("/suggest-ter", suggestController.suggestTer);

module.exports = router;
