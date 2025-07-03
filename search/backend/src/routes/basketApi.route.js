const express = require("express");
const router = express.Router();
const basketsApiController = require("../controllers/basketApi.controller");

/**
 * @swagger
 * /api/baskets:
 *  post:
 *    summary: Creates a new basket.
 *    tags: [Dai:Se - Baskets]
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: basket
 *        description: The basket to create.
 *        schema:
 *          type: object
 *          properties:
 *            content:
 *              type: string
 *            filters:
 *              type: string
 *            query:
 *              type: string
 *            userId:
 *              type: string
 *            keywords:
 *              type: string
 *    responses:
 *      201:
 *        description: Created
 */
router.post("/", basketsApiController.create);

/**
 * @swagger
 * /api/baskets:
 *   get:
 *     description: Returns all existing baskets.
 *     tags: [Dai:Se - Baskets]
 *     summary: Returns JSON containing all baskets.
 *     responses:
 *       200:
 *         description: JSON with a list of basket objects as JSON.
 */
router.get("/", basketsApiController.find);

/**
 * @swagger
 * /api/baskets/{basketId}:
 *   get:
 *     description: Returns a specific basket based on the basketId.
 *     tags: [Dai:Se - Baskets]
 *     summary: Returns a specific basket based on the basketId.
 *     parameters:
 *       - in: path
 *         name: basketId
 *         description: basketId of the basket to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: basket as a JSON object.
 */
router.get("/:basketId", basketsApiController.findByBasketId);

/**
 * @swagger
 * /api/baskets/user/{userId}:
 *   get:
 *     description: Returns a list of baskets based on the userId.
 *     tags: [Dai:Se - Baskets]
 *     summary: Returns all baskets related to a specific user (identified by userId).
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: userId of all baskets to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: An array of baskets with a specific userId as a JSON object.
 */
router.get("/user/:userId", basketsApiController.findByUserId);

/**
 * @swagger
 * /api/baskets:
 *   put:
 *     description: Updates a specific basket based on basketId.
 *     tags: [Dai:Se - Baskets]
 *     summary: Updates and returns a basket based on the basketId with values from the request body.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: basketId
 *         description: basketId of the basket to update.
 *         schema:
 *           type: string
 *       - in: body
 *         name: basket
 *         description: The updated basket data.
 *         schema:
 *           type: object
 *           properties:
 *             content:
 *               type: string
 *             filters:
 *               type: string
 *             query:
 *               type: string
 *             userId:
 *               type: string
 *             keywords:
 *               type: string
 *     responses:
 *       200:
 *         description: Updated basket.
 */
router.put("/:basketId", basketsApiController.update);

/**
 * @swagger
 * /api/baskets:
 *   delete:
 *     description: Deletes all existing baskets.
 *     tags: [Dai:Se - Baskets]
 *     summary: ToDo.
 *     responses:
 *       200:
 *         description: ...
 */
router.delete("/", basketsApiController.deleteAll);

/**
 * @swagger
 * /api/baskets/basketId:
 *   delete:
 *     description: Deletes a specific basket.
 *     tags: [Dai:Se - Baskets]
 *     summary: ToDo.
 *     parameters:
 *       - in: path
 *         name: basketId
 *         description: basketId of the basket to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: ...
 */
router.delete("/:basketId", basketsApiController.delete);

module.exports = router;
