import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
  ]);