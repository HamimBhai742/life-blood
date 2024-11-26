import React, { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const BloodDonationRequest = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    donorName: "",
    bloodGroup: "",
    district: "",
    lastDonation: "",
    donorType: "",
    contactNumber: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const phoneRegex = /^01[3,4,5,6,7,8,9]\d{8}$/;

    setFormData({ ...formData, [name]: value });

    if (value && !phoneRegex.test(value)) {
      setError("Phone number must be 11 digits, start with 01, and be valid.");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    const donar = {
      ...formData,
      status: "pending",
      date: new Date(),
    };
    console.log(donar);
    try {
      const { data } = await axiosPublic.post("/donate-request", donar);
      if (data?.message === "success") {
        toast.success(
          "Request send successful. Please wait for admin approval."
        );
      }
      console.log(data);
    } catch (err) {
      toast.error(error.message);
      console.log(err);
    }
  };

  return (
    <div className="bg-red-50 min-h-screen flex items-center justify-center py-8">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-red-500">
          Blood Donation Request
        </h2>

        {/* Donor Name */}
        <div className="mb-4">
          <label
            htmlFor="donorName"
            className="block text-gray-700 font-bold mb-2"
          >
            Donor Name
          </label>
          <input
            type="text"
            id="donorName"
            name="donorName"
            value={formData.donorName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-300"
            placeholder="Enter donor's name"
            required
          />
        </div>

        {/* Blood Group */}
        <div className="mb-4">
          <label
            htmlFor="bloodGroup"
            className="block text-gray-700 font-bold mb-2"
          >
            Blood Group
          </label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-300"
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        {/* District */}
        <div className="mb-4">
          <label
            htmlFor="district"
            className="block text-gray-700 font-bold mb-2"
          >
            District
          </label>
          <select
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-300"
            required
          >
            <option value="">Select District</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Gazipur">Gazipur</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Khulna">Khulna</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Barishal">Barishal</option>
            <option value="Rangpur">Rangpur</option>
            {/* Add more districts as needed */}
          </select>
        </div>

        {/* Last Blood Donation */}
        <div className="mb-4">
          <label
            htmlFor="lastDonation"
            className="block text-gray-700 font-bold mb-2"
          >
            Last Blood Donation
          </label>
          <input
            type="date"
            id="lastDonation"
            name="lastDonation"
            value={formData.lastDonation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-300"
            required
          />
        </div>

        {/* Donor Type */}
        <div className="mb-4">
          <label
            htmlFor="donorType"
            className="block text-gray-700 font-bold mb-2"
          >
            Donor Type
          </label>
          <select
            id="donorType"
            name="donorType"
            value={formData.donorType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-300"
            required
          >
            <option value="">Select Donor Type</option>
            <option value="Regular">Regular</option>
            <option value="Emergency">Emergency</option>
          </select>
        </div>

        {/* Contact Number */}
        <div className="mb-4">
          <label
            htmlFor="contactNumber"
            className="block text-gray-700 font-bold mb-2"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-300"
            placeholder="Enter contact number"
            required
          />
          <p className="text-red-500 text-sm">{error && error}</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default BloodDonationRequest;
