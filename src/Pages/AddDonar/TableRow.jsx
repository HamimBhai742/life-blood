import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaTint, FaSyncAlt, FaCheckCircle } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
const TableRow = ({ donor, handelBloodBtn, handelDeleteDoanr }) => {
  const startDate = new Date(donor?.lastDonation);
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
  console.log(difference)

  // useEffect(()=>{},[])
  return (
    <tr key={donor.id} className="hover:bg-red-50 transition duration-300">
      <td className="py-4 px-5 text-gray-900">{donor.donorName}</td>
      <td className="py-4 px-5 text-gray-700">
        <p>{Math.floor(difference)} days ago</p>
      </td>
      <td className="py-4 px-5 flex items-center space-x-2 text-gray-700">
        <FaTint className="text-red-500" />
        <span className="font-bold">{donor.bloodGroup}</span>
      </td>
      <td className="py-4 px-5 text-gray-700">{donor.district}</td>
      <td
        className={`py-4 px-5 flex items-center space-x-2 ${
          donor?.isDonate === false ? "text-green-600" : "text-red-600"
        }`}
      >
        <span
          className={`h-3 w-3 rounded-full ${
            donor?.isDonate === false ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
        <span>{donor?.isDonate === false ? "Available" : "Unavailable"}</span>
      </td>
      <td className="text-center">
        {donor?.isDonate === false ? (
          <>
            {donor?.status !== "pending" ? (
              <button className="flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                <FaCheckCircle className="mr-2" />
                Accept
              </button>
            ) : (
              <button
                onClick={() => handelBloodBtn(donor?._id)}
                className="flex items-center px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
              >
                <AiOutlineClockCircle className="mr-2" />
                Pending
              </button>
            )}
          </>
        ) : (
          <button
            onClick={() => handelDeleteDoanr(donor._id)}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            <FiTrash2 className="text-xl" />
            <span>Delete</span>
          </button>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
