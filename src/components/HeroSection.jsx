import React from "react";

const HeroSection = ({ title, description }) => (
  <section className="bg-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {description && <p className="text-lg">{description}</p>}
    </div>
  </section>
);

export default HeroSection;
