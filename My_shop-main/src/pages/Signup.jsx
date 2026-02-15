import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Popup from "../components/Popup";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        form
      );

      showPopup("Account created successfully!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      showPopup(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <Popup show={popup.show} message={popup.message} />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="max-w-md bg-white shadow p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">Signup</h2>

          <input
            className="w-full p-2 border rounded mb-3"
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="w-full p-2 border rounded mb-3"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            className="w-full p-2 border rounded mb-3"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            onClick={handleSubmit}
            className="w-full p-2 bg-green-600 text-white rounded"
          >
            Create Account
          </button>

          <Link to="/login" className="block mt-3 text-blue-600">
            Already have an account?
          </Link>
        </div>
      </div>
    </>
  );
}
