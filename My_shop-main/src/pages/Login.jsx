import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Popup from "../components/Popup";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      showPopup("Login successful!");
      setTimeout(() => navigate("/home"), 1000);
    } catch (err) {
      showPopup(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Popup show={popup.show} message={popup.message} />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="w-96 bg-white p-8 rounded shadow">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="bg-blue-600 text-white p-2 rounded">
              Login
            </button>

            <div className="flex justify-between text-sm">
              <Link to="/forgot" className="text-blue-600">
                Forgot Password?
              </Link>

              <Link to="/signup" className="text-blue-600">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
