import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import MyBloodDonateCard from "./MyBloodDonateCard";
import toast from "react-hot-toast";

const MyDonateRequest = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: myDonate = [], refetch } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/my-donate-request/${user?.email}`
      );
      return data;
    },
  });
  console.log(myDonate);
  const confirmDonate = async (id) => {
    console.log(id);
    const my = myDonate.find((m) => m._id === id);
    console.log(my);
    if (my?.isDonate === true) {
      toast.error("You have already donate confirm");
      return;
    }
    const { data } = await axiosPublic.put(`/confirm-donate/${id}`);
    console.log(data);
    if (data) {
      toast.success("You have blood donate successful");
      refetch();
    }
  };
  return (
    <div>
      <div className="grid grid-cols-5 my-5">
        {myDonate.map((m, idx) => (
          <MyBloodDonateCard confirmDonate={confirmDonate} key={idx} m={m} />
        ))}
      </div>
    </div>
  );
};

export default MyDonateRequest;
