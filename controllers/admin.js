const Product = require("../models/product");
// const mongodb = require("mongodb");

// const ObjectId = mongodb.ObjectId;

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // const userId = req.user._id;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user,
  });
  product
    .save()
    .then((result) => {
      console.log(`${title} created successfully`);
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log("error: ");
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      if (!product) return res.redirect("/");
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const udpatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updateDescription = req.body.description;
  // const product = new Product(
  //   updatedTitle,
  //   udpatedPrice,
  //   updateDescription,
  //   updatedImageUrl,
  //   new ObjectId(prodId)
  // );
  Product.findById(prodId)
    .then((product) => {
      product.title = updatedTitle;
      product.price = udpatedPrice;
      product.description = updateDescription;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then((result) => {
      console.log(`Updated product with Id: ${prodId}`);
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find()
    // .select("title, price, imageUrl")
    // .populate("userId")
    .then((products) => {
      console.log(products);
      res.render("admin/products-list", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log(`Product with id ${prodId} deleted`);
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
