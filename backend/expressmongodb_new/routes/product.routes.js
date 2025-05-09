const express = require("express");

const {
  createProduct,
  getAllProducts,
} = require("../controllers/product.controller");

const router = express.Router();
router.route("/product").post(createProduct);
router.route("/products").get(getAllProducts);

module.exports = router;
