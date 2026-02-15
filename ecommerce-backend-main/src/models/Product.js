const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  image: String,
  stock: Number,

  category: {
    type: String,
    enum: ["men", "women", "kids"],
    required: true,
    select: false   // 👈 hidden field
  }

}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
