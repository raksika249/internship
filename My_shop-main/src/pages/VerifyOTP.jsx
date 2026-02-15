import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "../components/Popup";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  const handleVerify = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        { email, otp }
      );

      const token = res.data.token;

      showPopup("OTP verified!");

      setTimeout(() => {
        navigate("/reset", { state: { token } });
      }, 1000);

    } catch (err) {
      showPopup(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <>
      <Popup show={popup.show} message={popup.message} />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="w-96 bg-white p-6 shadow rounded">
          <h2 className="text-xl font-bold mb-4">Verify OTP</h2>

          <input
            className="w-full p-2 border rounded mb-3"
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
          />

          <button
            onClick={handleVerify}
            className="w-full bg-green-600 text-white p-2 rounded"
          >
            Verify OTP
          </button>
        </div>
      </div>
    </>
  );
}
