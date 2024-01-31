module.exports = {
  Host: process.env.MySQL_Host || "localhost", // Replace with your database host
  Port: process.env.MySQL_Port || 3306, // Replace with your database port
  User: process.env.MySQL_User || "root", // Replace with your database username
  Password: process.env.MySQL_Password || "rootpw", // Replace with your database password
  Database: process.env.MySQL_Database || "search", // Replace with your database name
  Dialect: "mysql",
  Pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
