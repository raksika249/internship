import React, { useEffect, useState } from "react";
import axios from "axios";
import Popup from "../components/Popup";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [popup, setPopup] = useState({ show: false, message: "" });

  const token = localStorage.getItem("token");

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  const fetchWishlist = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/wishlist",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setWishlist(res.data.products);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const removeItem = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/wishlist/${productId}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      showPopup("Removed from wishlist");
      fetchWishlist();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8">
      <Popup show={popup.show} message={popup.message} />

      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 && <p>No items in wishlist.</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {wishlist.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow p-3"
          >
            <div className="w-full h-64 overflow-hidden rounded-md">
              <img
                src={`/assets/${item.image}`}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-2 font-semibold">
              {item.name}
            </h3>

            <p>₹{item.price}</p>

            <button
              onClick={() => removeItem(item._id)}
              className="w-full mt-3 bg-red-500 text-white py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
