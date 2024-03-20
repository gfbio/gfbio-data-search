var Keycloak = require("keycloak-connect");

let _keycloak;

const appRoot = require("app-root-path");
const {
  Keycloak_ClientId,
  Keycloak_BearerOnly,
  Keycloak_ServerUrl,
  Keycloak_Realm,
  Keycloak_Secret,
} = require(appRoot + "/src/config/environment"); // Import environment

var keycloakConfig = {
  clientId: Keycloak_ClientId, // Your Keycloak client ID
  bearerOnly: Keycloak_BearerOnly, // Set to true if this client is a bearer-only client
  serverUrl: Keycloak_ServerUrl, // URL of your Keycloak server
  realm: Keycloak_Realm, // Name of the Keycloak realm
  credentials: {
    secret: Keycloak_Secret, // Secret for the client (client ID)
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
