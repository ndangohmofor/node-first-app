const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "192.168.1.95",
  port: "3306",
  user: "shopadmin",
  database: "node-complete",
  password: "Karim_82",
});

module.exports = pool.promise();
