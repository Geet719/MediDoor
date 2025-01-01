import React from "react";

function BenefitsSection() {
  const benefits = [
    { title: "Fast Delivery", description: "Get medicines within hours." },
    { title: "Verified Stores", description: "Only trusted medical stores." },
    { title: "Easy to Use", description: "Simple and seamless experience." },
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
