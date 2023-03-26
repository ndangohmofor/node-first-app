const express = require("express");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const sequelize = require("./util/database");

const bodyParser = require("body-parser");
// const hbs = require("express-handlebars");

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

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
