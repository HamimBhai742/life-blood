import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: userDb = {}, refetch } = useQuery({
    enabled: !!user?.email,
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/user/${user?.email}`);
      console.log(data);
      return data;
    },
  });
  return [userDb, refetch];
};

export default useUser;
