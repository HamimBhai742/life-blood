import React from "react";

const BenefitsSection = () => {
  const benefits = [
    "Helps save lives",
    "Promotes good health",
    "Reduces harmful iron stores",
    "Stimulates blood cell production",
  ];

  return (
    <div className="my-10 px-6">
      <h2 className="text-2xl font-bold text-center text-red-500">
        Why Donate Blood?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            {benefit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
