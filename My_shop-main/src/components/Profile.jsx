import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg">

      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      {/* Profile Image */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        alt="profile"
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />

      <div className="space-y-3 text-lg">
        <p><strong>Name:</strong> {user?.name || "Guest User"}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>Address:</strong> Coimbatore, Tamil Nadu</p>
      </div>

      <button
        onClick={logout}
        className="mt-6 w-full bg-red-500 text-white py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
