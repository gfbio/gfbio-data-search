// Import necessary modules
const app = require("./src/app");

const appRoot = require("app-root-path");
const { APP_PORT } = require(appRoot + "/src/config/environment"); // Import environment

// Start the server and listen on the specified port
const server = app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});

// Handle server shutdown gracefully
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server shutting down...");
    process.exit(0);
  });
});
