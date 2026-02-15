import React from "react";

export default function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
