import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const cartRes = await axios.get(
          "http://localhost:5000/api/cart",
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        const wishRes = await axios.get(
          "http://localhost:5000/api/wishlist",
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        setCartCount(cartRes.data.items.length);
        setWishlistCount(wishRes.data.products.length);

      } catch (err) {
        console.error(err);
      }
    };

    fetchCounts();
  }, []);

  return (
    <nav className="w-full flex justify-between p-4 bg-white shadow items-center">
      <h2 className="text-2xl font-bold text-black">MyShop</h2>

      <div className="flex gap-6 items-center text-black">
        <Link to="/home" className="hover:text-blue-600 font-semibold">
          Women
        </Link>

        <Link to="/men" className="hover:text-blue-600 font-semibold">
          Men
        </Link>

        <Link to="/kids" className="hover:text-blue-600 font-semibold">
          Kids
        </Link>

        <Link to="/wishlist" className="hover:text-blue-600 font-semibold">
          Wishlist ({wishlistCount})
        </Link>

        <Link to="/cart" className="hover:text-blue-600 font-semibold">
          Cart ({cartCount})
        </Link>

        <Link to="/profile" className="hover:text-blue-600 font-semibold">
          Profile
        </Link>
      </div>
    </nav>
  );
}
