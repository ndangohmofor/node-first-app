// const Sequelize = require("sequelize");
// const sequelize = new Sequelize("node-complete", "shopadmin", "Karim_82", {
//   dialect: "mysql",
//   host: "192.168.1.95",
// });

// module.exports = sequelize;
const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOSTNAME,
  DB_DOMAINNAME,
} = require("../config");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}.${DB_DOMAINNAME}/shop?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
