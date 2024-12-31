import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import useUser from "../../hooks/useUser";

const AdimnRoute = ({ children }) => {
  const { user } = useAuth();
  const [userDb] = useUser();
  if (userDb?.role === "admin") {
    return children;
  }
  toast.error("Admin must be login for Blood donar request cheack");
  return <Navigate to="/login"></Navigate>;
};

export default AdimnRoute;
