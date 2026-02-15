require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./src/config/db");
const Product = require("./src/models/Product");

const seedProducts = async () => {
  try {
    await connectDB();

    // Clear old products
    await Product.deleteMany();

    const products = [
      // ---------------- WOMEN ----------------
      {
        name: "Kurti 1",
        price: 699,
        image: "https://via.placeholder.com/300x400?text=Kurti+1",
        category: "women"
      },
      {
        name: "Kurti 2",
        price: 799,
        image: "https://via.placeholder.com/300x400?text=Kurti+2",
        category: "women"
      },
      {
        name: "Kurti 3",
        price: 899,
        image: "https://via.placeholder.com/300x400?text=Kurti+3",
        category: "women"
      },
      {
        name: "Kurti 4",
        price: 999,
        image: "https://via.placeholder.com/300x400?text=Kurti+4",
        category: "women"
      },
      {
        name: "Kurti 5",
        price: 1099,
        image: "https://via.placeholder.com/300x400?text=Kurti+5",
        category: "women"
      },
      {
        name: "Kurti 6",
        price: 1199,
        image: "https://via.placeholder.com/300x400?text=Kurti+6",
        category: "women"
      },

      // ---------------- MEN ----------------
      {
        name: "Men Dress 1",
        price: 899,
        image: "https://via.placeholder.com/300x400?text=Men+1",
        category: "men"
      },
      {
        name: "Men Dress 2",
        price: 999,
        image: "https://via.placeholder.com/300x400?text=Men+2",
        category: "men"
      },
      {
        name: "Men Dress 3",
        price: 1099,
        image: "https://via.placeholder.com/300x400?text=Men+3",
        category: "men"
      },
      {
        name: "Men Dress 4",
        price: 1199,
        image: "https://via.placeholder.com/300x400?text=Men+4",
        category: "men"
      },
      {
        name: "Men Dress 5",
        price: 1299,
        image: "https://via.placeholder.com/300x400?text=Men+5",
        category: "men"
      },
      {
        name: "Men Dress 6",
        price: 1399,
        image: "https://via.placeholder.com/300x400?text=Men+6",
        category: "men"
      },

      // ---------------- KIDS ----------------
      {
        name: "Kids Dress 1",
        price: 499,
        image: "https://via.placeholder.com/300x400?text=Kids+1",
        category: "kids"
      },
      {
        name: "Kids Dress 2",
        price: 599,
        image: "https://via.placeholder.com/300x400?text=Kids+2",
        category: "kids"
      },
      {
        name: "Kids Dress 3",
        price: 699,
        image: "https://via.placeholder.com/300x400?text=Kids+3",
        category: "kids"
      },
      {
        name: "Kids Dress 4",
        price: 799,
        image: "https://via.placeholder.com/300x400?text=Kids+4",
        category: "kids"
      },
      {
        name: "Kids Dress 5",
        price: 899,
        image: "https://via.placeholder.com/300x400?text=Kids+5",
        category: "kids"
      },
      {
        name: "Kids Dress 6",
        price: 999,
        image: "https://via.placeholder.com/300x400?text=Kids+6",
        category: "kids"
      }
    ];

    await Product.insertMany(products);

    console.log("✅ Products Seeded Successfully!");
    process.exit();

  } catch (error) {
    console.error("❌ Seeding Error:", error);
    process.exit(1);
  }
};

seedProducts();
