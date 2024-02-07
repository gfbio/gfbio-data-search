const axios = require("axios");
const http = require("http");
const https = require("https");

/**
 * Create an Axios instance with default configuration.
 * This instance is configured with HTTP and HTTPS agents
 * to enable the keep-alive feature, which can improve the
 * performance of HTTP requests in some scenarios.
 */
const axiosInstance = axios.create({
  // Keep-alive config for HTTP connections
  httpAgent: new http.Agent({ keepAlive: true }),
  // Keep-alive config for HTTPS connections
  httpsAgent: new https.Agent({ keepAlive: true }),
  // Add more default settings if needed
});

/**
 * Axios interceptors can be added here if needed.
 * Interceptors allow you to run your code or modify
 * requests and responses before the request is sent
 * or after the response is received.
 *
 * Example:
 * axiosInstance.interceptors.request.use(request => {
 *   // Log or modify the request here
 *   return request;
 * });
 */

// axiosInstance.interceptors.request.use((request) => {
//   console.log("Request URL:", request.url);
//   console.log("Request Parameters:", request.params);
//   console.log("Request data:", request.data); // Request body data
//   return request;
// });
//
// axiosInstance.interceptors.response.use((response) => {
//   console.log("Response data:", response.data); // Response body data
//   return response;
// });

module.exports = axiosInstance;
