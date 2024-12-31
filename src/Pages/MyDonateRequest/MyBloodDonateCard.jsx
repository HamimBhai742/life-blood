import React, { useEffect, useState } from "react";

function MyBloodDonateCard({ m, confirmDonate }) {
  const startDate = new Date(m?.lastDonation);
  const endDate = new Date();
  const [difference, setDifference] = useState(null);
  useEffect(() => {
    if (startDate && endDate) {
      const timeDifference = endDate.getTime() - startDate.getTime();
      const dayDifference = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days
      setDifference(dayDifference);
    } else {
      alert("Please select both start and end dates.");
    }
  }, []);

  console.log(Math.floor(difference));
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      <h2 className="text-xl font-semibold text-red-600 mb-2">
        {m?.donorName}
      </h2>
      <p className="text-gray-700">
        <strong>Blood Group:</strong> {m?.bloodGroup}
      </p>
      <p className="text-gray-700">
        <strong>Donor Type:</strong> {m?.donorType}
      </p>
      <p className="text-gray-700">
        <strong>Last Donate:</strong> {Math.floor(difference)} days ago
      </p>
      <button
        onClick={() => confirmDonate(m?._id)}
        className={`mt-4 text-white py-2 px-4 rounded transition ${
          m?.isDonate === true
            ? "bg-green-500 hover:bg-green-600"
            : "bg-red-500 hover:bg-red-600"
        }`}
      >
        Confirm Donate
      </button>
    </div>
  );
}

export default MyBloodDonateCard;
