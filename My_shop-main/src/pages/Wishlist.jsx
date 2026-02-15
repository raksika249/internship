import React from "react";
import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 && <p>No items in wishlist.</p>}

      {/* 5 cards per row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-3 max-w-[230px] w-full"
          >
            <div className="w-full h-64 overflow-hidden rounded-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              {item.name}
            </h3>

            <p className="text-gray-600 text-sm">₹{item.price}</p>

            <button
              onClick={() => removeFromWishlist(item.id)}
              className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
