import React from "react";

export default function Sale() {
  const offers = [
    "🔥 Pongal Special – Flat 40% OFF on all Kurtis!",
    "✨ Diwali Dhamaka – Buy 1 Get 1 Free!",
    "🎉 End-of-Month Clearance Sale – Up to 60% OFF!",
    "🚗 Audi Offer – Premium Kurtis Sale for Luxury Week!",
    "🆕 New Arrivals Launch – Special 30% OFF Today Only!"
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Upcoming Sale & Offers</h2>

      <div className="flex flex-col gap-4">
        {offers.map((offer, i) => (
          <div key={i} className="p-4 bg-yellow-100 border-l-4 border-yellow-600 text-gray-800 rounded shadow">
            {offer}
          </div>
        ))}
      </div>
    </div>
  );
}
