import React from "react";

function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20"
    >
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Get Medicines Delivered to Your Doorstep
        </h1>
        <p className="mt-4 text-lg">
          Fast, reliable, and convenient delivery from verified medical stores.
        </p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100">
          Order Now
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
