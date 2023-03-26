const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-complete", "shopadmin", "Karim_82", {
  dialect: "mysql",
  host: "192.168.1.95",
});

module.exports = sequelize;
