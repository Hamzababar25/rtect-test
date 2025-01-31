import React from "react";

const PaymentCard = ({ title, points, description, price }) => (
  <div className="p-5 bg-[#231231] rounded-2xl shadow-md hover:shadow-lg transition-shadow">
    <h2 className="text-xl font-semibold mb-3 text-white font-roboto">
      {title}
    </h2>
    <div className="bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-sm font-bold inline-block px-3 py-1 rounded-full mb-4 text-white">
      {points} Points
    </div>
    <p className="text-sm text-white mb-3">{description}</p>
    <p className="text-3xl font-bold mb-3 text-white">${price}</p>
    <button className="w-full bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-2 rounded-xl text-center font-semibold hover:shadow-xl transition">
      Purchase Package
    </button>
  </div>
);

export default PaymentCard;
