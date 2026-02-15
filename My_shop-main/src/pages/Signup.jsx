import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Popup from "../components/Popup";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
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
        <div className="w-96 bg-white p-6 shadow rounded">
          <h2 className="text-2xl font-bold mb-4">Signup</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              placeholder="Full Name"
              className="border p-2 rounded"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />

            <button className="bg-green-600 text-white p-2 rounded">
              Create Account
            </button>
          </form>

          <Link to="/login" className="text-blue-600 mt-3 block">
            Already have an account?
          </Link>
        </div>
      </div>
    </>
  );
}
