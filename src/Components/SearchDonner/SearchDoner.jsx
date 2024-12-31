import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SearchDonors = ({ handelSearchBtn }) => {
  const [date, setDate] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  // const axiosPublic = useAxiosPublic();
  // const handelSearchBtn = async (e) => {
  //   e.preventDefault();
  //   const bloodGroup = e.target.bloodGroup.value;
  //   const district = e.target.district.value;
  //   const donorType = e.target.donorType.value;
  //   console.log(bloodGroup,district,donorType)
  //   try {
  //     const { data } = await axiosPublic.get(
  //       `/search-donor?bloodGroup=${bloodGroup}&district=${district}&donorType=${donorType}`
  //     );
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-xl font-semibold mb-6">Search Donors</h1>
      <form className="flex flex-wrap gap-4" onSubmit={handelSearchBtn}>
        {/* Blood Group Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Blood Group</label>
          <select
            name="bloodGroup"
            className="w-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          >
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
          <select
            name="district"
            className="w-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select District</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Gazipur">Gazipur</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Khulna">Khulna</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Barishal">Barishal</option>
            <option value="Rangpur">Rangpur</option>
          </select>
        </div>

        {/* Donor Type Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Donor Type</label>
          <select
            name="donorType"
            className="w-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="all">All</option>
            <option value="volunteer">Volunteer</option>
            <option value="replacement">Replacement</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded shadow focus:outline-none"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchDonors;
