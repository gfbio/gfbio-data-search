const MemoryStore = require("express-session").MemoryStore;
const appRoot = require("app-root-path");
const { SESSION_SECRET } = require(appRoot + "/src/config/environment"); // Import environment

module.exports = {
  secret: SESSION_SECRET, // Secret for session cookie (should be a long random string)
  resave: false, // Do not save the session to the store for every request
  saveUninitialized: true, // Save uninitialized sessions to the store
  store: new MemoryStore(), // Session storage using MemoryStore (not suitable for production)
};
