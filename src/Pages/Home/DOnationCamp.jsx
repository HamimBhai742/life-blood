import React from "react";

const DonationCamps = () => {
  const camps = [
    {
      date: "2024-01-15",
      division: "Dhaka",
      location: "Dhaka Medical College",
    },
    {
      date: "2025-01-22",
      division: "Chittagong",
      location: "Chittagong Blood Center",
    },
    {
      date: "2025-01-25",
      division: "Rajshahi",
      location: "Rajshahi Medical College",
    },
    { date: "2025-01-28", division: "Khulna", location: "Khulna Blood Bank" },
    {
      date: "2025-02-02",
      division: "Barisal",
      location: "Barisal Sadar Hospital",
    },
    {
      date: "2025-02-05",
      division: "Sylhet",
      location: "Sylhet MAG Osmani Medical College",
    },
    {
      date: "2025-02-10",
      division: "Rangpur",
      location: "Rangpur Blood Center",
    },
    {
      date: "2025-02-15",
      division: "Mymensingh",
      location: "Mymensingh Medical College",
    },
  ];

  return (
    <div className="my-10 px-6">
      <h2 className="text-2xl font-bold text-center text-red-500">
        Upcoming Donation Camps
      </h2>
      <div className="mt-6 space-y-4">
        {camps.map((camp, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div>
              <span className="font-bold text-red-500">{camp.division}</span> -{" "}
              {camp.location}
            </div>
            <div className="mt-2 sm:mt-0 sm:text-right">{camp.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationCamps;
