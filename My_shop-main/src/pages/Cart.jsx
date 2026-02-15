import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Popup from "../components/Popup";

export default function Cart() {
  const { cart, clearCart } = useCart();

  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2500);
  };

  const removeItem = (id) => {
    const remaining = cart.filter((item) => item.id !== id);

    clearCart();
    remaining.forEach((item) => cart.push(item));

    showPopup("Removed from cart");
  };

  const handleBuyAll = () => {
    if (cart.length === 0) {
      showPopup("Your cart is empty");
      return;
    }

    clearCart();
    showPopup("Order successful!");
  };

  return (
    <div className="p-6">
      <Popup message={popup.message} show={popup.show} />

      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 && <p>No items in cart.</p>}

      {/* 5 cards per row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {cart.map((item) => (
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
            <p className="text-gray-500 text-sm">Size: {item.size}</p>

            <button
              onClick={() => removeItem(item.id)}
              className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <button
          onClick={handleBuyAll}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded text-lg"
        >
          Buy All
        </button>
      )}
    </div>
  );
}
