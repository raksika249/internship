import React, { useEffect, useState } from "react";
import axios from "axios";
import Popup from "../components/Popup";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [popup, setPopup] = useState({ show: false, message: "" });

  const token = localStorage.getItem("token");

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  // 🔵 GET CART FROM BACKEND
  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/cart", {
        headers: { Authorization: `Bearer ${token}` }
      });

      setCartItems(res.data.items);
      setTotal(res.data.total);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // 🔴 REMOVE FROM CART
  const removeItem = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/cart/${productId}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      showPopup("Removed from cart");
      fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <Popup message={popup.message} show={popup.show} />

      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 && <p>No items in cart.</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {cartItems.map((item) => (
          <div
            key={item.product._id}
            className="bg-white rounded-xl shadow p-3"
          >
            <div className="w-full h-64 overflow-hidden rounded-md">
              <img
                src={`/assets/${item.product.image}`}
                alt={item.product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-2 font-semibold">
              {item.product.name}
            </h3>

            <p>₹{item.product.price}</p>
            <p>Qty: {item.quantity}</p>

            <button
              onClick={() => removeItem(item.product._id)}
              className="w-full mt-3 bg-red-500 text-white py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <h3 className="mt-6 text-xl font-bold">
          Total: ₹{total}
        </h3>
      )}
    </div>
  );
}
