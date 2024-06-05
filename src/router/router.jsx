import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import DashBoardLayout from "../layouts/DashBoardLayout";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";
import ViewProfile from "../Pages/DashBoard/ViewProfile/ViewProfile";
import EditProfile from "../Pages/DashBoard/EditProfile/EditProfile";
import CreateAd from "../Pages/DashBoard/CreateAd/CreateAd";
import ManageAd from "../Pages/DashBoard/ManageAd/ManageAd";
import EditAd from "../Pages/DashBoard/EditAd/EditAd";
import AdsDetails from "../Pages/DashBoard/AdsDetails/AdsDetails";
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
        {
          path: '/services',
          element: <Services></Services>,
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/aboutUs',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/packages',
          element: <Blog></Blog>
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
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <DashBoardLayout />
        </PrivateRoute>
      ),
      children: [
        {
          index: true,
          element: <DashboardHome />,
        },
        {
          path: "viewProfile",
          element: <ViewProfile />,
        },
        {
          path: "editProfile/:email",
          element: <EditProfile />,
        },
        {
          path: "createAd",
          element: <CreateAd />,
        },
        {
          path: "manageAd",
          element: <ManageAd />,
        },
        {
          path: "editAd/:id",
          element: <EditAd/>,
        },
        {
          path: "adDetails/:id",
          element: <AdsDetails/>,
        },
      ],
    },
  ]);