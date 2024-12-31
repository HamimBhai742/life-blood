import React, { useState } from "react";
import SearchDonors from "../../Components/SearchDonner/SearchDoner";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Donar = () => {
  const axiosPublic = useAxiosPublic();
  const [donors,setDonors]=useState([])
  const { data: donars = [], refetch } = useQuery({
    queryKey: ["donars"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/donars-blood");
      setDonors(data)
      return data;
    },
  });
  console.log(donars);
  const handelSearchBtn = async (e) => {
    e.preventDefault();
    const bloodGroup = e.target.bloodGroup.value;
    const district = e.target.district.value;
    const donorType = e.target.donorType.value;
    console.log(bloodGroup, district, donorType);
    try {
      const { data } = await axiosPublic.get(
        `/search-donor?bloodGroup=${bloodGroup}&district=${district}&donorType=${donorType}`
      );
      console.log(data);
      toast.success("Search successful");
      setDonors(data)
    } catch (err) {
      console.log(err.message);
      toast.error(err.message)
    }
  };
  console.log(donors)
  return (
    <div className=" min-h-screen px-4">
      {/* Search Filters */}
      <div className="bg-red-50">
        <SearchDonors handelSearchBtn ={handelSearchBtn}/>
      </div>
      {/* Donor Count */}
      <div className="bg-red-500 p-4 rounded-md my-8 text-gray-50">
        <p>Total donors found: {donors.length}.</p>
      </div>

      {/* Donor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {donors.length>0?donors.map((donor, index) => (
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
            <p className="font-bold">Name: {donor?.donorName}</p>
            <p className="text-gray-600">Group: {donor?.bloodGroup}</p>
            <p className="text-gray-600">District: {donor?.district}</p>
            <p className="text-gray-600">Phone: {donor?.contactNumber}</p>
            <p className="text-gray-600">Donor Type: {donor?.donorType}</p>
          </div>
        )) : <div className="min-h-screen flex justify-center items-center">
            <h2 className="text-5xl text-red-600 text-center">No Donors Found.</h2>
        </div>}
      </div>
    </div>
  );
};

export default Donar;
