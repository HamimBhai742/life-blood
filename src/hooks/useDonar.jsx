import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDonar = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: ownDonar = {}, refetch } = useQuery({
    enabled: !!user?.email,
    queryKey: ["ownDonar", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/donar/${user?.email}`);
      console.log(data);
      return data;
    },
  });
  return [ownDonar, refetch];
};

export default useDonar;
