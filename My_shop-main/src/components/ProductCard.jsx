import React, { useState } from "react";
import axios from "axios";

export default function ProductCard({ product, showPopup }) {
  const [size, setSize] = useState("M");

  const token = localStorage.getItem("token");

  const addToCart = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/cart",
        {
          productId: product._id,
          quantity: 1
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      showPopup(`${product.name} added to cart`);
    } catch (err) {
      console.error(err);
      showPopup("Error adding to cart");
    }
  };

  const addToWishlist = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/wishlist",
        { productId: product._id },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      showPopup(`${product.name} added to wishlist`);
    } catch (err) {
      console.error(err);
      showPopup("Error adding to wishlist");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-3 max-w-[230px] w-full">

      <div className="w-full h-64 overflow-hidden rounded-md">
        <img
          src={`/assets/${product.image}`}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p>₹{product.price}</p>

      <div className="grid grid-cols-2 gap-2 mt-3">
        <button
          onClick={addToCart}
          className="bg-blue-600 text-white py-2 rounded"
        >
          Add
        </button>

        <button
          onClick={addToWishlist}
          className="bg-red-500 text-white py-2 rounded"
        >
          ❤️
        </button>
      </div>
    </div>
  );
}
