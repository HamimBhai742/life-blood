import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchDonors = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="flex flex-col items-center bg-gray-50 py-8">
      <h1 className="text-xl font-semibold mb-6">Search Donors</h1>
      <div className="flex flex-wrap gap-4">
        {/* Blood Group Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Blood Group</label>
          <select className="w-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* District Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">District</label>
          <select className="w-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="">Select</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Khulna">Khulna</option>
          </select>
        </div>

        {/* Date Picker */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Date of Blood Donation
          </label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            placeholderText="mm/dd/yyyy"
            className="w-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Donor Type Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Donor Type</label>
          <select className="w-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
            <option value="all">All</option>
            <option value="volunteer">Volunteer</option>
            <option value="replacement">Replacement</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded shadow focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchDonors;
