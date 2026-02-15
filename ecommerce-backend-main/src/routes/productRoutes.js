const express = require("express");
const router = express.Router();
const {
  getProductsByCategory,
  addProduct
} = require("../controllers/productController");

router.get("/category/:category", getProductsByCategory);
router.post("/add", addProduct);

module.exports = router;
