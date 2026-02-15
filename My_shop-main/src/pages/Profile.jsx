import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="flex flex-col gap-4">
        
        {/* Profile Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          className="w-32 h-32 rounded-full mx-auto"
          alt="profile"
        />

        <p><strong>Name:</strong> Demo User</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Contact:</strong> 9876543210</p>
        <p><strong>Address:</strong> Chennai, India</p>

        <button
          onClick={logout}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
