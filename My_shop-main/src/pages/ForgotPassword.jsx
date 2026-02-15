import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/forgot-password", { email });

      showPopup("OTP sent to email");

      setTimeout(() => {
        navigate("/verify-otp", { state: { email } });
      }, 1000);

    } catch (err) {
      showPopup(err.response?.data?.message || "Error sending OTP");
    }
  };

  return (
    <>
      <Popup show={popup.show} message={popup.message} />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="w-96 bg-white p-6 shadow rounded">
          <h2 className="text-xl font-bold mb-4">Forgot Password</h2>

          <input
            className="w-full p-2 border rounded mb-3"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Send OTP
          </button>
        </div>
      </div>
    </>
  );
}
