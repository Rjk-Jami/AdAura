import React from "react";
import useAuth from "../Components/hooks/useAuth";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const DashBoardLayout = () => {
  const { user, googleLogin, EmailPassLogin, createUser, logout, authLoading } =
    useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    logout()
      .then(() => {
        // Sign-out successful.

        navigate("/");
        window.refresh();
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="drawer font-semibold">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2"><NavLink to={'/dashboard'}>AdAura Dashboard</NavLink></div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal items-center">
                {/* Navbar menu content here */}
                <li>
                  <Link to={"/dashboard/manageAd"}>Manage All Ad</Link>
                </li>
                <li>
                  <Link to={"/dashboard/createAd"}>Create Ad</Link>
                </li>
                <div className="w-[2px] h-10 bg-black my-auto"></div>
                <li>
                  <Link to={"/dashboard/viewProfile"}>View Profile</Link>
                </li>
                <li>
                  <Link to={`/dashboard/editProfile/${user?.email}`}>Edit Profile</Link>
                </li>
                <div className="w-[2px] h-10 bg-black my-auto"></div>
                <div className="flex gap-1">
                <li><Link to={"/"} className="">
                  Home
                </Link></li>
                <li><button className="" onClick={handleLogout}>
                  Logout
                </button></li>
              </div>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-200 flex justify-between">
            {/* Sidebar content here */}
            <div className="">
              <li>
                <Link to={"/dashboard/manageAd"}>Manage All Ad</Link>
              </li>
              <li>
                <Link to={"/dashboard/createAd"}>Create Ad</Link>
              </li>
            </div>
            <div className="">
              <div className="">
                <li>
                  <Link to={"/dashboard/viewProfile"}>View Profile</Link>
                </li>
                <li>
                  <Link to={`/dashboard/editProfile/${user?.email}`}>Edit Profile</Link>
                </li>
              </div>
              <div className="w-full h-[2px] bg-black"></div>
              <div className="flex gap-4 p-4">
                <Link to={"/"} className="btn btn-neutral">
                  Home
                </Link>
                <button className="btn btn-error" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
