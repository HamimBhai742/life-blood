import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useUser from "../../hooks/useUser";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [userDb] = useUser();
  console.log(userDb?.img);
  const navItems = [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/donar",
      element: "Donar",
    },
    {
      path: userDb?.role === "admin" ? "/add-donar" : "/add-blood-request",
      element: userDb?.role === "admin" ? "Donar Request" : "Donate Request",
    },
    {
      path: "/about",
      element: "About",
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
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-14 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={
                user
                  ? `${userDb?.img}`
                  : "https://png.pngtree.com/png-vector/20220819/ourmid/pngtree-protection-healthcare-assistance-human-vector-png-image_33343756.png"
              }
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-28 p-2 shadow"
        >
          <li>
            <a className="justify-between text-black">Profile</a>
          </li>
          {userDb.role==="user" && (
            <li>
              <Link
                to={"/my-donate-request"}
                className="justify-between text-black"
              >
                My Donate Request
              </Link>
            </li>
          )}
          {/* <li>
            <a>Settings</a>
          </li> */}
          <li className="text-black">
            {user ? (
              <button
                onClick={() => logOut(toast.success("Logout Successful"))}
              >
                Log Out
              </button>
            ) : (
              <Link to="login">Log In</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
