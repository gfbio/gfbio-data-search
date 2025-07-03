const router = require("express").Router();
const collectionController = require("../controllers/collection.controller");

// Collection endpoints

/**
 * POST /collection
 * Create a new collection.
 * @swagger
 * /collection:
 *   post:
 *     summary: Create a new collection.
 *     tags: [Collections]
 *     description: This endpoint allows you to create a new collection.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: The data for creating a new collection.
 *           example: { "name": "My Collection", "description": "A collection of datasets" }
 *     responses:
 *       200:
 *         description: New collection created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: The newly created collection.
 *       500:
 *         description: Server error or issue with creating a collection.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                 error:
 *                   type: object
 *                   description: Details of the error.
 */
router.post("/collection", collectionController.createCollection);

/**
 * PUT /collection-update
 * Update an existing collection.
 * @swagger
 * /collection-update:
 *   put:
 *     summary: Update an existing collection.
 *     tags: [Collections]
 *     description: This endpoint allows you to update an existing collection.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: The data for updating an existing collection.
 *           example: { "collection_id": "123", "name": "Updated Collection" }
 *     responses:
 *       200:
 *         description: Collection updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               description: The updated collection.
 *       500:
 *         description: Server error or issue with updating a collection.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                 error:
 *                   type: object
 *                   description: Details of the error.
 */
router.put("/collection-update", collectionController.collectionUpdate);

module.exports = router;
