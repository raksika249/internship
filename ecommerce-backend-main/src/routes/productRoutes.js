const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Create product
router.post("/", productController.createProduct);

// Get all products
router.get("/", productController.getProducts);

// Get products by category (men/women/kids)
router.get("/category/:category", productController.getProductsByCategory);

module.exports = router;
