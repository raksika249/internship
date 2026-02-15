import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Popup from "../components/Popup";

import k1 from "../assets/kid1.jpg";
import k2 from "../assets/kid2.jpg";
import k3 from "../assets/kid3.jpg";
import k4 from "../assets/kid4.jpg";
import k5 from "../assets/kid5.jpg";
import k6 from "../assets/kid6.jpg";

export default function Kids() {
  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  const products = [
    { id: 1, name: "Kids Dress 1", price: 499, image: k1 },
    { id: 2, name: "Kids Dress 2", price: 599, image: k2 },
    { id: 3, name: "Kids Dress 3", price: 699, image: k3 },
    { id: 4, name: "Kids Dress 4", price: 799, image: k4 },
    { id: 5, name: "Kids Dress 5", price: 899, image: k5 },
    { id: 6, name: "Kids Dress 6", price: 999, image: k6 },
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
