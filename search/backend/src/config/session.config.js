const MemoryStore = require("express-session").MemoryStore;

module.exports = {
  secret: process.env.SESSION_SECRET, // Secret for session cookie (should be a long random string)
  resave: false, // Do not save the session to the store for every request
  saveUninitialized: true, // Save uninitialized sessions to the store
  store: new MemoryStore(), // Session storage using MemoryStore (not suitable for production)
};
