import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Popup from "../components/Popup";

import w1 from "../assets/kurti1.jpg";
import w2 from "../assets/kurti2.jpg";
import w3 from "../assets/kurti3.jpg";
import w4 from "../assets/kurti4.jpg";
import w5 from "../assets/kurti5.jpg";
import w6 from "../assets/kurti6.jpg";

export default function Home() {
  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  const products = [
    { id: 1, name: "Kurti 1", price: 699, image: w1 },
    { id: 2, name: "Kurti 2", price: 799, image: w2 },
    { id: 3, name: "Kurti 3", price: 899, image: w3 },
    { id: 4, name: "Kurti 4", price: 999, image: w4 },
    { id: 5, name: "Kurti 5", price: 1099, image: w5 },
    { id: 6, name: "Kurti 6", price: 1199, image: w6 },
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
