const appRoot = require("app-root-path");
const {
  MySQL_Host,
  MySQL_Port,
  MySQL_User,
  MySQL_Password,
  MySQL_Database,
} = require(appRoot + "/src/config/environment"); // Import environment

module.exports = {
  Host: MySQL_Host,
  Port: MySQL_Port,
  User: MySQL_User,
  Password: MySQL_Password,
  Database: MySQL_Database,

  Dialect: "mysql",
  Pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
