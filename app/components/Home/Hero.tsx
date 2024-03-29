import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <header className="text-center">
        <h2 className="text-sm font-semibold text-brown-600">
          Spotless Solutions, Seamless Service
        </h2>
        <h1 className="mt-2 text-5xl font-bold text-brown-800">
          MADTOWN MAIDS
        </h1>
        <p className="mt-4 text-gray-600">
          Introducing top-tier cleaning services to the Madison, WI area. Call,
          text, or book online today to transform your living space.
        </p>
      </header>
      <div className="flex justify-center mt-8">
        <button className="bg-brown-600 text-white px-6 py-2 rounded shadow hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-600 focus:ring-opacity-50">
          BOOK NOW
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-8">
        {/* Image Container */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/modern-interior-design.jpg"
            alt="Clean and tidy living space"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
