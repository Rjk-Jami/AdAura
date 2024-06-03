import { Link, NavLink } from "react-router-dom";

import React from "react";
import useAuth from "../../../Components/hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const navbar = (
    ""
  );
  return (
    <div className="navbar bg-base-100 sticky top-0 md:px-16 px-5 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>All Recepies</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <NavLink to={"/"} className=" text-xl font-bold">
          <span className="text-p font-extrabold">A</span>d<span className="text-p font-extrabold">A</span>ura
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 px-1 font-semibold">
          <li>
          <NavLink className={({ isActive }) => isActive ? `relative text-[#fd4822] after:bg-[#fd4822] after:absolute after:h-[2px] after:-bottom-1 after:left-0 after:w-[55%] ` : `relative text-ad hover:after:bg-[#fd4822] hover:after:absolute hover:after:h-[2px] hover:after:bottom-[6px] hover:after:left-0 hover:after:w-[55%]`} to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? `relative text-[#fd4822] after:bg-[#fd4822] after:absolute after:h-[2px] after:-bottom-1 after:left-0 after:w-[55%] ` : `relative text-ad hover:after:bg-[#fd4822] hover:after:absolute hover:after:h-[2px] hover:after:-bottom-1 hover:after:left-0 hover:after:w-[55%]`} to={"/services"}>Services</NavLink>
          </li>
          <li>
          <NavLink className={({ isActive }) => isActive ? `relative text-[#fd4822] after:bg-[#fd4822] after:absolute after:h-[2px] after:-bottom-1 after:left-0 after:w-[55%] ` : `relative text-ad hover:after:bg-[#fd4822] hover:after:absolute hover:after:h-[2px] hover:after:-bottom-1 hover:after:left-0 hover:after:w-[55%]`} to={"/contact"}>Contact</NavLink>
          </li>
          <li>
          <NavLink className={({ isActive }) => isActive ? `relative text-[#fd4822] after:bg-[#fd4822] after:absolute after:h-[2px] after:-bottom-1 after:left-0 after:w-[55%] ` : `relative text-ad hover:after:bg-[#fd4822] hover:after:absolute hover:after:h-[2px] hover:after:-bottom-1 hover:after:left-0 hover:after:w-[55%]`} to={"/aboutUs"}>About us</NavLink>
          </li>
          <li>
          <NavLink className={({ isActive }) => isActive ? `relative text-[#fd4822] after:bg-[#fd4822] after:absolute after:h-[2px] after:-bottom-1 after:left-0 after:w-[55%] ` : `relative text-ad hover:after:bg-[#fd4822] hover:after:absolute hover:after:h-[2px] hover:after:-bottom-1 hover:after:left-0 hover:after:w-[55%]`} to={"/blog"}>Blog</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex gap-4 ">{""}
      <>
      {user && user ? (
        <>
          <div>
            <button
              className="btn btn-ghost btn-link no-underline hover:no-underline px-0 text-black hover:font-bold md:w-16"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div>
            <Link
              to={"/dashboard"}
              className="btn btn-ghost btn-link no-underline hover:no-underline px-0 text-black hover:font-bold md:w-16"
            >
              Dashboard
            </Link>
          </div>

          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-8">
              <span>AS</span>
            </div>
          </div>
        </>
      ) : (<>
        <Link
          to={"/login"}
          className="text-p font-semibold "
        >
          Sign Up
        </Link>
        <Link
          to={"/signUp"}
          className="py-2 rounded-sm font-semibold px-4 bg-[#fd4822] hover:bg-[#fd4622e0] text-white  "
        >
          Login
        </Link>
        </>)}
    </>
      </div>
    </div>
  );
};

export default Navbar;
