import React from "react";
import axios from "axios";

const ProductCard = ({ item }) => {
  const handleCheckOut = async () => {
    try {
      const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/create-checkout-session`,{product:item});
      console.log(res);
      window.location.href=res.data.url
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div
      
      className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out overflow-hidden transform hover:scale-[1.02] border border-gray-100"
    >
      <div className="w-full h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover transition duration-500 ease-in-out hover:opacity-90"
          src={item.image}
          alt={item.name}
        />
      </div>

      <div className="p-5 flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-1 truncate w-full">
          {item.name}
        </h2>
        <p className="text-2xl font-bold text-indigo-600 mb-3">${item.price}</p>

        <button onClick={handleCheckOut} className="mt-2 w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-150">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
