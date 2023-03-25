const express = require("express");
const path = require("path");
const rootDir = require("./util/path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const db = require("./util/database");
const bodyParser = require("body-parser");
// const hbs = require("express-handlebars");

const app = express(); //Request handler

// app.engine(
//   "handlebars",
//   hbs.engine({ layoutsDir: "views/layouts", defaultLayout: "main-layout" })
// );

db.execute("SELECT * FROM products")
  .then((result) => console.log(result[0], result[1]))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// const server = http.createServer(app);

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// server.listen(3000);
app.listen(3000);
