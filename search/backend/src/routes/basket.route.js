const express = require("express");
const router = express.Router();
const basketController = require("../controllers/basket.controller");

/**
 * POST /basketDownload
 * download the basket
 */
/**
 * @swagger
 * /gfbio/basketDownload:
 *   post:
 *     description: Downloads the chosen datasets as a zip file.
 *     tags: [Search GFBio - Elastic index]
 *     summary: Downloads the chosen datasets as a zip file.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: basket
 *         description: An object containing an array of datasets.
 *         schema:
 *           type: object
 *           required:
 *             - basket
 *           properties:
 *             basket:
 *               type: array
 *               items:
 *                 type: object
 *     responses:
 *       201:
 *         description: The browser starts to download the zip file.
 */
router.post("/basketDownload", basketController.basketDownload);

/**
 * POST /addToBasket
 * download the basket
 */
/**
 * @swagger
 * /gfbio/addToBasket:
 *   post:
 *     description: Adds a dataset to the basket.
 *     tags: [Search GFBio - Elastic index]
 *     summary: Adds a dataset to the basket.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: addToBasket
 *         description: Adds a dataset to the basket.
 *         schema:
 *           type: object
 *           required:
 *             - userId
 *             - basketContent
 *           properties:
 *             userId:
 *               type: integer
 *             basketContent:
 *               type: object
 *     responses:
 *       201:
 *         description: The item will be added to the database.
 */
router.post("/addToBasket", basketController.addToBasket);

/**
 * POST /readFromBasket
 * download the basket
 */
/**
 * @swagger
 * /gfbio/readFromBasket:
 *   get:
 *     description: Returns the saved basket of the user.
 *     tags: [Search GFBio - Elastic index]
 *     summary: Returns the saved basket of the user.
 *     parameters:
 *       - in: query
 *         name: userId
 *         description: The user ID to retrieve the basket for.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Returns the saved basket of the user.
 */
router.get("/readFromBasket", basketController.readFromBasket);

module.exports = router;
