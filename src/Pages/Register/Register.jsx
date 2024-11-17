// Register.js
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

export default function Register() {
  const { createUser, logOut } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log("Form Data:", formData);
    const { email, password } = formData;
    try {
      await createUser(email, password).then((res) => {
        console.log(res.user);
        if (res?.user) {
          logOut();
          navigate("/login");
          toast.success("Register Successful. Now you have login your Id.");
        }
      });
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100 py-10">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border border-red-400 rounded-lg shadow-lg">
        <div className="flex gap-8 items-center">
          <Link to="/">
            {" "}
            <FaArrowLeft className="-mt-8 text-red-600 text-xl" />
          </Link>
          <h2 className="text-xl mt-6 font-bold text-center text-red-600">
            Register for Blood Donation
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-red-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-red-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-red-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-red-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
              placeholder="Enter a password"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-red-700">
              Choose Photo
            </label>
            <input
              type="file"
              name="photo"
              onChange={handlePhotoChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400"
          >
            Register
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-red-600 hover:underline"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
