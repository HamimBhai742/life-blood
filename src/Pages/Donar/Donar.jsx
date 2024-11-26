import React from "react";
import SearchDonors from "../../Components/SearchDonner/SearchDoner";

const donors = [
  {
    name: "Oronno Anam",
    group: "AB+",
    district: "Dhaka",
  },
  {
    name: "Maksudur Rahman",
    group: "B+",
    district: "Brahmanbaria",
  },
  {
    name: "Md Iqbal Hossain",
    group: "AB+",
    district: "Dhaka",
  },
  {
    name: "Obaydul Ahmed Faraz",
    group: "O+",
    district: "Munshiganj",
  },
  {
    name: "Abu",
    group: "B+",
    district: "Munshiganj",
  },
  {
    name: "Aditi",
    group: "B+",
    district: "Dhaka",
  },
  {
    name: "Md. Mehedi Hassan",
    group: "O+",
    district: "Dhaka",
  },
  {
    name: "Ali Ahsan",
    group: "O+",
    district: "Sylhet",
  },
  {
    name: "Asad",
    group: "B+",
    district: "Khulna",
  },
  {
    name: "Ashikur Alam",
    group: "AB+",
    district: "Gazipur",
  },
];

const Donar = () => {
  return (
    <div className=" min-h-screen px-4">
      {/* Search Filters */}
      <div className="bg-red-50">
        <SearchDonors />
      </div>
      {/* Donor Count */}
      <div className="bg-red-500 p-4 rounded-md my-8 text-gray-50">
        <p>Total donors found: {donors.length}.</p>
      </div>

      {/* Donor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {donors.map((donor, index) => (
          <div
            key={index}
            className="bg-white p-4 border rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a7 7 0 00-7 7v4.382l-.447.894A2 2 0 006.553 16h10.894a2 2 0 001.447-3.724l-.447-.894V9a7 7 0 00-7-7zm-3 9a1 1 0 112 0 1 1 0 01-2 0zm5 0a1 1 0 112 0 1 1 0 01-2 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="font-bold">Name: {donor.name}</p>
            <p className="text-gray-600">Group: {donor.group}</p>
            <p className="text-gray-600">District: {donor.district}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donar;
