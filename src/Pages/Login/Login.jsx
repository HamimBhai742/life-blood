import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const handelSubmitBtn = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    try {
      signIn(email, password)
        .then((res) => {
          if (res.user) {
            navigate("/");
            toast.success("Login Successful");
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.message);
        });
    } catch (err) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <div className="flex gap-8 items-center">
          <Link to="/">
            {" "}
            <FaArrowLeft className="-mt-8 text-red-600 text-xl" />
          </Link>
          <h2 className="text-xl font-bold text-center text-red-700">
            Login for Blood Donation
          </h2>
        </div>
        <form onSubmit={handelSubmitBtn} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
          >
            {loading ? <ImSpinner2 className="animate-spin m-auto" /> : "Login"}
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-red-600 hover:underline"
            >
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
