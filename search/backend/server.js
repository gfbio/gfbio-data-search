// Import necessary modules
const app = require("./src/app");
const dotenv = require("dotenv").config();

// Define the default port (3000) if not specified in environment variables
const PORT = process.env.APP_PORT || 3000;

// Start the server and listen on the specified port
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle server shutdown gracefully
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server shutting down...");
    process.exit(0);
  });
});
