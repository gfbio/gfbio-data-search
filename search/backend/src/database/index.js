const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");

// Create a new Sequelize instance with the database configurations
const sequelize = new Sequelize(
  dbConfig.Database,
  dbConfig.User,
  dbConfig.Password,
  {
    host: dbConfig.Host,
    port: dbConfig.Port,
    dialect: dbConfig.Dialect,
    pool: {
      max: dbConfig.Pool.max,
      min: dbConfig.Pool.min,
      acquire: dbConfig.Pool.acquire,
      idle: dbConfig.Pool.idle,
    },
  }
);

const db = {};

// Sequelize and sequelize instances
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.baskets = require("../models/basket.model")(sequelize, Sequelize);

// Set up relationships between models (if any)
// For example, if you had a User model and each user could have many baskets:
// db.users = require("../models/user.model")(sequelize, Sequelize);
// db.baskets.belongsTo(db.users);

module.exports = db;
