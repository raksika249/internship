import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "../components/Popup";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.state?.token;

  const [newPassword, setNewPassword] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  const handleReset = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/reset-password",
        { token, newPassword }
      );

      showPopup("Password reset successful!");

      setTimeout(() => navigate("/login"), 1000);

    } catch (err) {
      showPopup(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <>
      <Popup show={popup.show} message={popup.message} />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="w-96 bg-white p-6 shadow rounded">
          <h2 className="text-xl font-bold mb-4">Reset Password</h2>

          <input
            type="password"
            className="w-full p-2 border rounded mb-3"
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button
            onClick={handleReset}
            className="w-full bg-green-600 text-white p-2 rounded"
          >
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
}
