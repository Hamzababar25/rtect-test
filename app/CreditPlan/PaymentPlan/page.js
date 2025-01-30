import Header from "@/app/Header";
import React from "react";

const PaymentPlan = () => {
  return (
    <main className="flex-1 p-8">
      <Header />
      <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6 bg-[#14081E] p-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="p-5 bg-[#231231] rounded-2xl shadow-md hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-3 text-white font-roboto">
              lorem ipsum served the same purpose.
            </h2>
            <div className="bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-sm font-bold inline-block px-3 py-1 rounded-full mb-4 text-white">
              20 Points
            </div>
            <p className="text-sm text-white mb-3">
              Written by the Ancient Roman author Cicero, old-style printing
              presses required tedious hand-setting of letter and punctuation
              marks.
            </p>
            <p className="text-3xl font-bold mb-3 text-white">$60</p>
            <button className="w-full bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-2 rounded-xl text-center font-semibold hover:shadow-xl transition">
              Purchase Package
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PaymentPlan;
