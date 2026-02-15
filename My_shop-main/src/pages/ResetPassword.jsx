import React, { useState } from "react";
import axios from "axios";
import Popup from "../components/Popup";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  const handleReset = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/reset-password`,
        { password }
      );

      showPopup("Password reset successfully!");
    } catch {
      showPopup("Reset failed");
    }
  };

  return (
    <>
      <Popup show={popup.show} message={popup.message} />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="max-w-md bg-white p-6 shadow rounded">
          <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

          <input
            type="password"
            className="w-full p-2 border rounded mb-3"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleReset}
            className="w-full p-2 bg-green-600 text-white rounded"
          >
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
}
