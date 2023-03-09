const express = require("express");
const path = require("path");
const rootDir = require("./util/path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");
const hbs = require("express-handlebars");

const app = express(); //Request handler

app.engine(
  "handlebars",
  hbs.engine({ layoutsDir: "views/layouts", defaultLayout: "main-layout" })
);

app.set("view engine", "handlebars");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// const server = http.createServer(app);

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

// server.listen(3000);
app.listen(3000);
