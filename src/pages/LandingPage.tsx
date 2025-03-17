import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Welcome to Our Store
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        The best products at the best prices, just for you.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
        Shop Now
      </button>
    </div>
  );
};

export default LandingPage;
