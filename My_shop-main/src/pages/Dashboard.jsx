import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Popup from "../components/Popup";

import img1 from "../assets/kurti1.jpg";
import img2 from "../assets/kurti2.jpg";
import img3 from "../assets/kurti3.jpg";
import img4 from "../assets/kurti4.jpg";
import img5 from "../assets/kurti5.jpg";
import img6 from "../assets/kurti6.jpg";

export default function Dashboard() {
  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  const products = [
    { id: 1, name: "Kurti 1", price: 699, image: img1 },
    { id: 2, name: "Kurti 2", price: 799, image: img2 },
    { id: 3, name: "Kurti 3", price: 899, image: img3 },
    { id: 4, name: "Kurti 4", price: 999, image: img4 },
    { id: 5, name: "Kurti 5", price: 1099, image: img5 },
    { id: 6, name: "Kurti 6", price: 1199, image: img6 },
  ];

  return (
    <>
      <Popup
        message={popup.message}
        show={popup.show}
        onClose={() => setPopup({ show: false, message: "" })}
      />

      {/* Beautiful grid with small card gaps */}
      <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} showPopup={showPopup} />
        ))}
      </div>
    </>
  );
}
