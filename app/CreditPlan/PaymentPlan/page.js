import React from "react";
import PaymentCard from "@/components/PaymentCard";

const PaymentPlan = () => {
  const packages = Array.from({ length: 6 }).map(() => ({
    title: "Lorem Ipsum Served the Same Purpose",
    points: 20,
    description:
      "Written by the Ancient Roman author Cicero, old-style printing presses required tedious hand-setting of letter and punctuation marks.",
    price: 60,
  }));

  return (
    <main className="flex-1 p-6">
      <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 bg-[#14081E] p-10">
        {packages.map((pkg, index) => (
          <PaymentCard
            key={index}
            title={pkg.title}
            points={pkg.points}
            description={pkg.description}
            price={pkg.price}
          />
        ))}
      </section>
    </main>
  );
};

export default PaymentPlan;
