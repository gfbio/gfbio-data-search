const session = require("express-session");
const keycloakConfig = require("../config/keycloak.config");
const sessionConfig = require("../config/session.config");

const memoryStore = new session.MemoryStore();

// Middleware function to configure Keycloak
function configureKeycloak(app) {
  const keycloak = keycloakConfig.initKeycloak(memoryStore);
  app.use(keycloak.middleware({ logout: "/logoff" }));
}

// Middleware function to configure Express Session
function configureSession(app) {
  app.use(session({ ...sessionConfig, store: memoryStore }));
}

module.exports = {
  configureKeycloak,
  configureSession,
};
