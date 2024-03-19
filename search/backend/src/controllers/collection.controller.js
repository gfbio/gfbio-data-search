const axiosService = require("../config/axios.config");

const appRoot = require("app-root-path");
const { COLLECTIONS_API_URL, COLLECTIONS_API_TOKEN } = require(appRoot +
  "/src/config/environment"); // Import environment

/**
 * Update an existing collection.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const collectionUpdate = (req, res) => {
  // Extract data from the request body
  const { collection_id, ...requestData } = req.body;

  // Configure headers for the API request
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Token ${COLLECTIONS_API_TOKEN}`,
  };

  // Construct the update URL
  const updateUrl = `${COLLECTIONS_API_URL}${collection_id}`;

  // Make a PUT request to update the collection
  return axiosService
    .put(updateUrl, requestData, { headers: headers })
    .then((resp) => {
      // Send the response from the API as the result
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      // Handle errors and send an error response
      console.log(err);
      return res.status(500).json({
        msg: "Error while updating the collection",
        error: err.message,
      });
    });
};

/**
 * Create a new collection.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const createCollection = (req, res) => {
  // Configure headers for the API request
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Token ${COLLECTIONS_API_TOKEN}`,
  };

  // Make a POST request to create a new collection
  return axios
    .post(COLLECTIONS_API_URL, req.body, { headers: headers })
    .then((resp) => {
      // Send the response from the API as the result
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      // Handle errors and send an error response
      console.log(err);
      return res.status(500).json({
        msg: "Error while creating a new collection",
        error: err.message,
      });
    });
};

module.exports = {
  createCollection,
  collectionUpdate,
};
