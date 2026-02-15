const Product = require("../models/Product");

// GET PRODUCTS BY CATEGORY
exports.getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category.toLowerCase();

    const products = await Product.find({
      category: category
    });

    if (!products.length) {
      return res.status(404).json({
        message: "No products found for this category"
      });
    }

    res.status(200).json(products);

  } catch (error) {
    console.error("Get Products Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// ADD PRODUCT (for Postman testing)
exports.addProduct = async (req, res) => {
  try {
    const { name, price, image, category } = req.body;

    if (!name || !price || !image || !category) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const newProduct = await Product.create({
      name,
      price,
      image,
      category: category.toLowerCase()
    });

    res.status(201).json(newProduct);

  } catch (error) {
    console.error("Add Product Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
