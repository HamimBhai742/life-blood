import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-banner py-20 rounded-lg mt-6 mx-10"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-[700px]">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          SMS-based platform to connect blood searchers with donors
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Rokto is a real-time free platform to help blood searchers connect
          voluntary blood donors around Bangladesh.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to="/register" className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition">
            Join as a Donor
          </Link>
          <button className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-100 transition shadow-md">
            Search Donors
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
