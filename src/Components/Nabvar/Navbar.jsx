import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/about",
      element: "About",
    },
    {
      path: "/login",
      element: "Login",
    },
    {
      path: "/register",
      element: "Register",
    },
  ];
  return (
    <div className="navbar bg-[#EB2C29] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems.map((n) => (
              <NavLink to={n.path}>{n.element}</NavLink>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">Life Blood</a>
      </div>
      <div className="navbar-center hidden lg:flex gap-5">
        {navItems.map((n) => (
          <NavLink to={n.path}>{n.element}</NavLink>
        ))}
      </div>
      <div className="navbar-end flex flex-col gap-2">
        <div className="flex gap-2">
          <FaFacebook />
          <FaYoutube />
          <FaTwitter />
        </div>
        <h3>SMS to 01625524255</h3>
      </div>
    </div>
  );
};

export default Navbar;
