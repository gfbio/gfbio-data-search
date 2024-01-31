var Keycloak = require("keycloak-connect");

let _keycloak;

var keycloakConfig = {
  clientId: process.env.Keycloak_ClientId, // Your Keycloak client ID
  bearerOnly: process.env.Keycloak_BearerOnly, // Set to true if this client is a bearer-only client
  serverUrl: process.env.Keycloak_ServerUrl, // URL of your Keycloak server
  realm: process.env.Keycloak_Realm, // Name of the Keycloak realm
  credentials: {
    secret: process.env.Keycloak_Secret, // Secret for the client (client ID)
  },
};

function initKeycloak(memoryStore) {
  if (_keycloak) {
    console.warn("Trying to init Keycloak again!");
    return _keycloak;
  } else {
    console.log("Initializing Keycloak...");
    _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
    return _keycloak;
  }
}

function getKeycloak() {
  if (!_keycloak) {
    console.error(
      "Keycloak has not been initialized. Please call initKeycloak first."
    );
  }
  return _keycloak;
}

module.exports = {
  initKeycloak,
  getKeycloak,
};
