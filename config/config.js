const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      profess.env.DB_PASSWORD,
      {
        hose: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );

module.exports = sequelize;
