import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const { logout } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <nav className="w-full flex justify-between p-4 bg-white shadow items-center">
      <h2 className="text-2xl font-bold text-black">MyShop</h2>

      <div className="flex gap-6 items-center text-black">

        {/* FIXED: Women goes to /home */}
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
          Wishlist ({wishlist.length})
        </Link>

        <Link to="/cart" className="hover:text-blue-600 font-semibold">
          Cart ({cart.length})
        </Link>

        <Link to="/profile" className="hover:text-blue-600 font-semibold">
          Profile
        </Link>

      </div>
    </nav>
  );
}
