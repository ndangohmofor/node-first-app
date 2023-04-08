const express = require("express");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
// const sequelize = require("./util/database");
// const Product = require("./models/product");

const User = require("./models/user");

/**
 * MongoDB connection
 */
// const mongoConnect = require("./util/database").mongoConnect;

/**
 * Mongoose connection
 */
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
// const Cart = require("./models/cart");
// const CartItem = require("./models/cart-item");
// const Order = require("./models/order");
// const OrderItem = require("./models/order-item");
// const hbs = require("express-handlebars");
const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOSTNAME,
  DB_DOMAINNAME,
  PORT,
} = require("./config");

const app = express(); //Request handler

// app.engine(
//   "handlebars",
//   hbs.engine({ layoutsDir: "views/layouts", defaultLayout: "main-layout" })
// );

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// const server = http.createServer(app);

app.use((req, res, next) => {
  User.findById("642d4f5d6688c63a98e11abc")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.hasMany(CartItem);
// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });
// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product, { through: OrderItem });

// sequelize
//   // .sync({ force: true })
//   .sync()
//   .then((result) => {
//     return User.findByPk(1);
//   })
//   .then((user) => {
//     if (!user) {
//       return User.create({ name: "Mofs", email: "test@testMail.com" });
//     }
//     return Promise.resolve(user);
//   })
//   .then((user) => {
//     // console.log(user);
//     return user.createCart();
//   })
//   .then((cart) => {
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// mongoConnect(() => {
//   app.listen(`${PORT}`);
// });

mongoose
  .connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}.${DB_DOMAINNAME}/shop?retryWrites=true&w=majority`
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Mofor",
          email: "mofor@email.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(`${PORT}`);
  })
  .catch((err) => {
    console.log("Error encountered: ", err);
  });
