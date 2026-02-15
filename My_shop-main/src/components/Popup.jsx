import React, { useEffect } from "react";

export default function Popup({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2000); // auto hide in 2s
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
      {message}
    </div>
  );
}
