import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Donar from "../Pages/Donar/Donar";
import BloodDonationRequest from "../Pages/AddBloodRequest/AddBloodRequset";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import AddDonar from "../Pages/AddDonar/AddDonar";
import AdimnRoute from "./ProtectedRoute/AdminProtected";
import MyDonateRequest from "../Pages/MyDonateRequest/MyDonateRequest";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/donar",
        element: <Donar />,
      },

      {
        path: "/add-blood-request",
        element: (
          <ProtectedRoute>
            <BloodDonationRequest />
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-donar",
        element: (
          <AdimnRoute>
            <AddDonar />
          </AdimnRoute>
        ),
      },
      {
        path: "/my-donate-request",
        element: <MyDonateRequest />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
