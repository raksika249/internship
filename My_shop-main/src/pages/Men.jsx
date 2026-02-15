import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Popup from "../components/Popup";

import m1 from "../assets/men1.jpg";
import m2 from "../assets/men2.jpg";
import m3 from "../assets/men3.jpg";
import m4 from "../assets/men4.jpg";
import m5 from "../assets/men5.jpg";
import m6 from "../assets/men6.jpg";

export default function Men() {
  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  const products = [
    { id: 1, name: "Men Dress 1", price: 899, image: m1 },
    { id: 2, name: "Men Dress 2", price: 999, image: m2 },
    { id: 3, name: "Men Dress 3", price: 1099, image: m3 },
    { id: 4, name: "Men Dress 4", price: 1199, image: m4 },
    { id: 5, name: "Men Dress 5", price: 1299, image: m5 },
    { id: 6, name: "Men Dress 6", price: 1399, image: m6 },
  ];

  return (
    <>
      <Popup
        message={popup.message}
        show={popup.show}
        onClose={() => setPopup({ show: false, message: "" })}
      />

      <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-items-center items-start">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} showPopup={showPopup} />
        ))}
      </div>
    </>
  );
}
