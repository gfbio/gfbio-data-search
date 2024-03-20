// Importing dotenv module
const dotenv = require("dotenv").config();
// console.log(dotenv);

// function to validate essential environment variables
function validateConfig(variable, variableName) {
  if (!variable) {
    throw new Error(
      `Critical configuration error: ${variableName} is not set.`
    );
  }
}

// Set and validate environment variables
const SESSION_SECRET = process.env.SESSION_SECRET || "default_secret";
validateConfig(SESSION_SECRET, "SESSION_SECRET");

module.exports = {
  HOST: process.env.HOST || "localhost",
  APP_PORT: process.env.APP_PORT || 3000,

  SESSION_SECRET: process.env.SESSION_SECRET || "default_secret",

  GFBIOTS_URL:
    process.env.GFBIOTS_URL ||
    "https://default-gfbio.bgbm.org/api/terminologies/",
  TERMINOLOGY_SUGGEST_URL:
    process.env.TERMINOLOGY_SUGGEST_URL ||
    "https://default-gfbio.bgbm.org/api/terminologies/suggest/",

  ELASTIC_INDEX_URL: process.env.ELASTIC_INDEX_URL || "http://index",
  ELASTIC_INDEX_NAME: process.env.ELASTIC_INDEX_NAME || "search-dev",
  ELASTIC_INDEX_PORT: process.env.ELASTIC_INDEX_PORT || "9200",

  Keycloak_ClientId:
    process.env.Keycloak_ClientId || "default-dev-NFDI4Biodiversity",
  Keycloak_BearerOnly:
    process.env.Keycloak_BearerOnly !== undefined
      ? process.env.Keycloak_BearerOnly === "true"
      : false,
  Keycloak_ServerUrl:
    process.env.Keycloak_ServerUrl ||
    "https://default-keycloak.sso.gwdg.de/auth",
  Keycloak_Realm: process.env.Keycloak_Realm || "default-GFBio",
  Keycloak_Secret: process.env.Keycloak_Secret || "default-keycloak-secret",

  MySQL_Host: process.env.MySQL_Host || "localhost",
  MySQL_Port: process.env.MySQL_Port || 3306,
  MySQL_User: process.env.MySQL_User || "root",
  MySQL_Password: process.env.MySQL_Password || "default-rootpw",
  MySQL_Database: process.env.MySQL_Database || "default-search",

  COLLECTIONS_API_URL:
    process.env.COLLECTIONS_API_URL ||
    "https://default-collections.gfbio.dev/api/collections/",
  COLLECTIONS_API_TOKEN: process.env.COLLECTIONS_API_TOKEN || "default-token",

  VAT_ROOT_URL: process.env.VAT_ROOT_URL || "https://default-vat.gfbio.dev",
};
