import { Link, NavLink } from "react-router-dom";
import React from "react";
import useAuth from "../../../Components/hooks/useAuth";
import { BsFillPersonFill } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { GrView } from "react-icons/gr";

const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user);
  const handleLogout = () => {
    logout();
  };
  const activeTrue =
    "relative text-[#fd4822] after:bg-[#fd4822] after:absolute after:h-[2px] after:-bottom-1 after:left-0 md:after:w-[55%] after:w-[25%]";

  const navbar = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${activeTrue} `
              : `relative text-ad hover:after:bg-[#fd4822] hover:after:absolute hover:after:h-[2px] hover:after:-bottom-1 hover:after:left-0 hover:after:w-[55%]`
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${activeTrue} `
              : `relative text-ad hover:after:bg-[#fd4822] hover:after:absolute hover:after:h-[2px] hover:after:-bottom-1 hover:after:left-0 hover:after:w-[55%]`
          }
          to={"/services"}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${activeTrue} `
              : `relative text-ad hover:after:bg-[#fd4822] hover:after:absolute hover:after:h-[2px] hover:after:-bottom-1 hover:after:left-0 hover:after:w-[55%]`
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${activeTrue} `
              : `relative text-ad hover:after:bg-[#fd4822] hover:after:absolute hover:after:h-[2px] hover:after:-bottom-1 hover:after:left-0 hover:after:w-[55%]`
          }
          to={"/aboutUs"}
        >
          About us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${activeTrue} `
              : `relative text-ad hover:after:bg-[#fd4822] hover:after:absolute hover:after:h-[2px] hover:after:-bottom-1 hover:after:left-0 hover:after:w-[55%]`
          }
          to={"/blog"}
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 md:px-16 px-5 z-10 w-full bg-white">
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
            {navbar}
          </ul>
        </div>
        <NavLink to={"/"} className=" text-xl font-bold">
          <span className="text-p font-extrabold">A</span>d
          <span className="text-p font-extrabold">A</span>ura
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 px-1 font-semibold">{navbar}</ul>
      </div>

      <div className="navbar-end flex gap-4 ">
        {""}
        <>
          {user && user ? (
            <>
              <div>
                <Link
                  to={"/dashboard"}
                  className="relative text-ad hover:after:bg-[#fd4822] hover:after:absolute hover:after:h-[2px] hover:after:-bottom-1 hover:after:left-0 hover:after:w-[55%] font-semibold"
                >
                  Dashboard
                </Link>
              </div>
              {/*  dropdown-left dropdown-bottom */}
              <div className="dropdown dropdown-hover dropdown-end">
                {user && user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    tabIndex={0}
                    role="button"
                    className="btn btn-circle hover:bg-transparent bg-transparent border-none btn-sm  w-full  text-p"
                    alt=""
                  />
                ) : (
                  <BsFillPersonFill
                    tabIndex={0}
                    role="button"
                    className="btn btn-circle  btn-md md:btn-sm w-full p-2 text-p"
                  ></BsFillPersonFill>
                )}
                <ul
                  tabIndex={0}
                  className=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="w-auto">
                    <NavLink
                      to={"/viewProfile"}
                      className="justify-start flex flex-row-reverse gap-2 items-center text-md text-ad cursor-pointer "
                    >
                      <GrView className="font-semibold  " />
                      <p>View Profile</p>
                    </NavLink>{" "}
                  </li>
                  <li className="w-auto">
                    <NavLink
                      to={"/EditProfile"}
                      className="justify-start flex flex-row-reverse gap-2 items-center text-md text-ad cursor-pointer "
                    >
                      <FiSettings className="font-semibold  " />
                      <p>Edit Profile</p>
                    </NavLink>{" "}
                  </li>

                  <li className="w-auto">
                    <div
                      onClick={handleLogout}
                      className="justify-start flex flex-row-reverse gap-2 items-center text-md text-ad cursor-pointer "
                    >
                      <TbLogout2 className="font-semibold  " />
                      <p>logout</p>
                    </div>{" "}
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to={"/signUp"} className="text-p font-semibold ">
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="py-2 rounded-sm font-semibold px-4 bg-[#fd4822] hover:bg-[#fd4622e0] text-white  "
              >
                Login
              </Link>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Navbar;
