import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import TableRow from "./TableRow";
import useDonar from "../../hooks/useDonar";
import toast from "react-hot-toast";

const AddDonar = () => {
  const axiosPublic = useAxiosPublic();
  const { data: donars = [], refetch } = useQuery({
    queryKey: ["donars"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/donars");
      return data;
    },
  });
  const handelBloodBtn = async (id) => {
    const { data } = await axiosPublic.put(`/update-donar/${id}`);
    console.log(data);
    if (data) {
      toast.success("Donar request accept successful");
    }
    refetch();
  };

  const handelDeleteDoanr = async (id) => {
    const { data } = await axiosPublic.delete(`/delete-donar/${id}`);
    console.log(data);
    if (data) {
      toast.success("Donar deleted successful");
    }
    refetch();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-red-600">
        Blood Donors
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-red-600 text-white">
            <tr className="text-left font-semibold">
              <th className="py-3 px-5">Donor Name</th>
              <th className="py-3 px-5">Last Donation</th>
              <th className="py-3 px-5">Blood Group</th>
              <th className="py-3 px-5">District</th>
              <th className="py-3 px-5">Status</th>
              <th className="py-3 px-5 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {donars.map((donor) => (
              <TableRow
                handelDeleteDoanr={handelDeleteDoanr}
                handelBloodBtn={handelBloodBtn}
                donor={donor}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddDonar;
