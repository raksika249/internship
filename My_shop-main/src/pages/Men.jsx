import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Popup from "../components/Popup";

export default function Men() {
  const [products, setProducts] = useState([]);
  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (msg) => {
    setPopup({ show: true, message: msg });
    setTimeout(() => setPopup({ show: false, message: "" }), 2000);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/category/men"
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching men products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Popup
        message={popup.message}
        show={popup.show}
        onClose={() => setPopup({ show: false, message: "" })}
      />

      <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-items-center">
        {products.map((item) => (
          <ProductCard
            key={item._id}
            product={item}
            showPopup={showPopup}
          />
        ))}
      </div>
    </>
  );
}
