// const Sequelize = require("sequelize");
// const sequelize = require("../util/database");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Sequelize code
 */
// const Order = sequelize.define("order", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   quantity: Sequelize.INTEGER,
// });
// module.exports = Order;

const orderSchema = new Schema({
  products: [
    {
      product: {
        type: Object,
        required: true,
      },
      quantity: { type: Number, require: true },
    },
  ],
  user: {
    email: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
});

module.exports = mongoose.model("Order", orderSchema);
