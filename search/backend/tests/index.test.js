require("dotenv").config({ path: ".env" });

const request = require("supertest");
const app = require("../src/app");

require("dotenv").config({ path: ".env" });

describe("Server API", () => {
  it("should return 'Server is up!'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Server is up!" });
  });
});
