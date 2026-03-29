const Product = require("../models/Product");


exports.getIndex = (req, res) => {
  Product.fetchAll((products) => {
    res.render("index", {
      products: products,
    });
  });
};


exports.getAddProduct = (req, res) => {
  res.render("add-product");
};

exports.postAddProduct = (req, res) => {
  const { title, price } = req.body;

  const product = new Product(title, price);
  product.save();

  res.redirect("/");
};