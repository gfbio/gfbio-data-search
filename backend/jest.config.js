/**
 * Jest configuration for the search backend.
 *
 * The backend is plain CommonJS, so no transform is needed. Tests live under
 * `tests/` and mock the Elasticsearch client and the shared axios instance —
 * they exercise pure service logic with no live ES or aggregator.
 */
module.exports = {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.js"],
  clearMocks: true,
};
