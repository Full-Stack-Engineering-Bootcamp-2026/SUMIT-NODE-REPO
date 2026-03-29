const express = require("express");
const router = express.Router();

const productsController = require("../controller/Product");

router.get("/", productsController.getIndex);
router.get("/add-product", productsController.getAddProduct);
router.post("/add-product", productsController.postAddProduct);

module.exports = router;