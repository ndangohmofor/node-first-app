const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  //   console.log("shop.js ", adminData.products);
  //   //send response
  //   res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/shop" });
});

module.exports = router;
