/**
 * Sequelize configs
 */
// const db = require("../util/database");
// const Cart = require("./cart");
// const Sequelize = require("sequelize");
// const sequelize = require("../util/database");

/**
 * MongoDB Configs
 */
// const mongodb = require("mongodb");
// const getDb = require("../util/database").getDb;

/**
 * Mongoose configs
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema; //Allows to create new schemas

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// class Product {
//   constructor(title, price, description, imageUrl, id, userId) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = id ? new mongodb.ObjectId(id) : null;
//     this.userId = userId;
//   }

//   // save() {
//   //   const db = getDb();
//   //   let dbOp;
//   //   if (this._id) {
//   //     dbOp = db
//   //       .collection("products")
//   //       .updateOne({ _id: this._id }, { $set: this });
//   //   } else {
//   //     dbOp = db.collection("products").insertOne(this);
//   //   }
//   //   return dbOp
//   //     .then((result) => console.log(result))
//   //     .catch((err) => console.log(err));
//   // }

//   // static fetchAll() {
//   //   const db = getDb();
//   //   return db
//   //     .collection("products")
//   //     .find()
//   //     .toArray()
//   //     .then((products) => {
//   //       console.log(products);
//   //       return products;
//   //     })
//   //     .catch((err) => console.log(err));
//   // }

//   // static findById(prodId) {
//   //   const db = getDb();
//   //   return db
//   //     .collection("products")
//   //     .find({ _id: new mongodb.ObjectId(prodId) })
//   //     .next()
//   //     .then((prod) => {
//   //       return prod;
//   //     })
//   //     .catch((err) => console.log(err));
//   // }

//   // static deleteById(prodId) {
//   //   const db = getDb();
//   //   return db
//   //     .collection("products")
//   //     .deleteOne({ _id: new mongodb.ObjectId(prodId) })
//   //     .then((result) => {
//   //       console.log("Deleted Prod: ", prodId);
//   //     })
//   //     .catch((err) => console.log(err));
//   // }
// }

// const Product = sequelize.define("product", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false,
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// });

module.exports = mongoose.model("Product", productSchema);
