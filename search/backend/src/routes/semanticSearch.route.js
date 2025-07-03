const router = require("express").Router();

const semanticSearchController = require("../controllers/semanticSearch.controller");

// Semantic Search Endpoints (Add Swagger documentation)

/**
 * POST /semantic-search
 * semantic search service (based on query expansion)
 * search query is sent to GFBio TS first, only expanded result is forwarded to elasticsearch
 */
/**
 * @swagger
 * /gfbio/semantic-search:
 *   post:
 *     description: search query is sent to GFBio TS first, only expanded result is forwarded to elasticsearch
 *     tags: [Search GFBio - Elastic index]
 *     summary: returns search results including semantic related results
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: queryterm
 *         description: the query as string array
 *         schema:
 *            type: object
 *            required:
 *              - queryterm
 *            properties:
 *              queryterm:
 *                type: array
 *                items:
 *                   type: string
 *                example: [honeybee,grassland]
 *              from:
 *                type: integer
 *                description: from which page to start?
 *                example: 0
 *              size:
 *                type: integer
 *                description: how many datasets to return per page?
 *                example: 10
 *     responses:
 *       201:
 *         description: hits.hits contains an array with dataset objects matching the query.
 */

router.post("/semantic-search", semanticSearchController.semanticSearch);

/**
 * POST /broad
 * Semantic Broaden service for expanding semantic search
 * Expands the given term using the Semantic Broaden service.
 * @swagger
 * /broad:
 *   post:
 *     summary: Expand a semantic term using the Semantic Broaden service.
 *     tags: [Semantic Search]
 *     description: This endpoint expands a semantic term using the Semantic Broaden service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - uri
 *             properties:
 *               id:
 *                 type: string
 *                 description: The identifier of the term.
 *               uri:
 *                 type: string
 *                 description: The URI of the term.
 *     responses:
 *       200:
 *         description: Expanded semantic term retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Server error or issue with the expansion process.
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
router.post("/broad", semanticSearchController.semanticBroaden);

/**
 * POST /narrow
 * Semantic Narrow service for narrowing semantic search results
 * Narrows down the given term using the Semantic Narrow service.
 * @swagger
 * /narrow:
 *   post:
 *     summary: Narrow a semantic term using the Semantic Narrow service.
 *     tags: [Semantic Search]
 *     description: This endpoint narrows down a semantic term using the Semantic Narrow service.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - uri
 *             properties:
 *               id:
 *                 type: string
 *                 description: The identifier of the term.
 *               uri:
 *                 type: string
 *                 description: The URI of the term.
 *     responses:
 *       200:
 *         description: Narrowed semantic term retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Server error or issue with the narrowing process.
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
router.post("/narrow", semanticSearchController.semanticNarrow);

module.exports = router;
