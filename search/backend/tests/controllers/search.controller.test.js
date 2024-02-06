require("dotenv").config({ path: ".env" });
const axios = require("axios");
const axiosMockAdapter = require("axios-mock-adapter");
const request = require("supertest");
const app = require("../../src/app"); // Import your Express app
const searchService = require("../../src/services/search.service"); // Import your Express app

// your-test-file.test.js
jest.mock("../../src/config/axios.config", () => {
  const axios = require("axios");

  // Create a custom Axios instance for testing
  const axiosInstance = axios.create();

  // Mock the request and response interceptors
  jest.spyOn(axiosInstance.interceptors.request, "use");
  jest.spyOn(axiosInstance.interceptors.response, "use");

  return axiosInstance;
});

jest.mock("../../src/middleware/cache.middleware", () => {
  // Return a function that represents the middleware
  return jest.fn((allowedRoutes, duration) => {
    // This is the actual middleware function that will be executed
    return (req, res, next) => {
      // Mock middleware behavior here
      next(); // Call next to simulate middleware execution
    };
  });
});

// Mock keycloak.config.js
jest.mock("../../src/config/keycloak.config", () => {
  return {
    initKeycloak: () => {
      console.log("Mocked Keycloak Initialization...");
      return {
        middleware: () => {
          return (req, res, next) => {
            // Mock Keycloak middleware behavior here if needed
            next();
          };
        },
      };
    },
    getKeycloak: () => {
      console.log("Mocked Keycloak Instance...");
      return {
        // Mock Keycloak instance methods or properties here if needed
      };
    },
  };
});

// Create an instance of the Axios mock adapter
const axiosMock = new axiosMockAdapter(axios);

// Your test suite
describe("Search Controller", () => {
  // Mock the Axios request
  axiosMock
    .onPost("https://elasticsearch.gfbio.dev/es/dataportal-gfbio/_search")
    .reply(200, {
      took: 3326,
      timed_out: false,
      _shards: { total: 2, successful: 2, skipped: 0, failed: 0 },
      hits: {
        total: 9337711,
        max_score: 4,
        hits: [
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
        ],
      },
      aggregations: {
        dataCenter: {
          doc_count_error_upper_bound: 0,
          sum_other_doc_count: 0,
          buckets: [Array],
        },
        gfbioDataKind: {
          doc_count_error_upper_bound: 0,
          sum_other_doc_count: 0,
          buckets: [Array],
        },
        parameter: {
          doc_count_error_upper_bound: 6959,
          sum_other_doc_count: 3564546,
          buckets: [Array],
        },
        taxonomy: {
          doc_count_error_upper_bound: 12778,
          sum_other_doc_count: 8424065,
          buckets: [Array],
        },
        type: {
          doc_count_error_upper_bound: 0,
          sum_other_doc_count: 0,
          buckets: [Array],
        },
        region: {
          doc_count_error_upper_bound: 1184,
          sum_other_doc_count: 302277,
          buckets: [Array],
        },
      },
    });

  // Your test case
  it("should handle search request", async () => {
    const response = await request(app)
      .post("/gfbio/search") // Use the correct endpoint from your app.js
      .send({
        queryterm: "",
        from: 0,
        size: 10,
      });

    // Assertions
    expect(response.status).toBe(200); // Check if the status code is 200
    expect(response.body).toHaveProperty("took");
    expect(response.body).toHaveProperty("hits.total");
    expect(response.body).toHaveProperty("aggregations");
  });

  // Your test case
  it("should handle search request with page size change", async () => {
    const response = await request(app)
      .post("/gfbio/search") // Use the correct endpoint from your app.js
      .send({
        queryterm: "",
        from: 0,
        size: 15,
      });

    // Assertions
    expect(response.status).toBe(200); // Check if the status code is 200
    expect(response.body).toHaveProperty("took");
    expect(response.body).toHaveProperty("hits.total");
    expect(response.body).toHaveProperty("aggregations");
  });

  it("should handle invalid search request with non-string queryterm", async () => {
    const response = await request(app).post("/gfbio/search").send({
      queryterm: 123, // Invalid queryterm
      from: 0,
      size: 10,
    });

    expect(response.status).toBe(400);
    // Add more assertions to check the error response
  });

  it("should handle invalid search request with non-integer from", async () => {
    const response = await request(app).post("/gfbio/search").send({
      queryterm: "valid-query",
      from: "invalid", // Invalid 'from'
      size: 10,
    });

    expect(response.status).toBe(400);
    // Add more assertions to check the error response
  });

  it("should handle invalid search request with non-integer size", async () => {
    const response = await request(app).post("/gfbio/search").send({
      queryterm: "valid-query",
      from: 0,
      size: "invalid", // Invalid 'size'
    });

    expect(response.status).toBe(400);
    // Add more assertions to check the error response
  });

  it("should handle search service error", async () => {
    // Mock the searchService to throw an error
    jest.spyOn(searchService, "executeSearch").mockImplementation(() => {
      throw new Error("Error executing search");
    });

    try {
      await request(app).post("/gfbio/search").send({
        queryterm: "valid-query",
        from: 0,
        size: 10,
      });
    } catch (error) {
      // Check the error message and status code here
      expect(error.message).toBe("Error executing search");
      expect(error.status).toBe(500);
    }

    // Restore the original implementation of searchService.executeSearch
    searchService.executeSearch.mockRestore();
  });
});
