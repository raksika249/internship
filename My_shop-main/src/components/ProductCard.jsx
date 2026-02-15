import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ product, showPopup }) {
  const [size, setSize] = useState("M");
  const { addToCart, buyNow } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-3 max-w-[230px] w-full">

      {/* BIG IMAGE LIKE TEMPLATE */}
      <div className="w-full h-64 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h3 className="mt-2 text-lg font-semibold text-gray-900">
        {product.name}
      </h3>

      <p className="text-gray-600 text-sm">₹{product.price}</p>

      <select
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="w-full border mt-2 p-2 rounded text-sm"
      >
        <option>M</option>
        <option>S</option>
        <option>L</option>
        <option>XL</option>
      </select>

      <div className="grid grid-cols-3 gap-2 mt-3">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm"
          onClick={() => {
            addToCart({ ...product, size });
            showPopup(`${product.name} added to cart`);
          }}
        >
          Add
        </button>

        <button
          className="bg-green-600 hover:bg-green-700 text-white py-2 rounded text-sm"
          onClick={() => {
            buyNow({ ...product, size });
            showPopup(`${product.name} ordered successfully!`);
          }}
        >
          Buy
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 rounded text-sm"
          onClick={() => {
            addToWishlist(product);
            showPopup(`${product.name} added to wishlist`);
          }}
        >
          ❤️
        </button>
      </div>
    </div>
  );
}
