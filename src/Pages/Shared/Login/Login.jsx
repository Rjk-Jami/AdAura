import { Link, NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import useAuth from "../../../Components/hooks/useAuth";
import axios from "axios";
import moment from "moment";

export default function Login() {
  const { user, googleLogin, EmailPassLogin, createUser, logout, authLoading } =
    useAuth();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");

  // useEffect(() => {
  //   if (user) {
  //     navigate(from, { replace: true });
  //   }
  // }, [user, authLoading, navigate, from]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    EmailPassLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        if (loggedUser) {
          setError("");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        const errorMessage = error?.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const userData = {
          name: loggedUser?.displayName,
          email: loggedUser?.email,
          photo: loggedUser?.photoURL,
          phone:"",
          joinedDate: moment().format("MMM Do YY"),
          createdAd: [],
          bookedAd: [],
          totalView: 0,
        };
        axios.post("https://ad-aura-server.vercel.app/user", userData).then((res) => {
          
          
        });

       
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 relative">
      <NavLink to={from}>
        <div className="flex gap-2 items-center absolute left-0 top-0 z-40 m-5 text-ad">
          <FaLongArrowAltLeft />
          <p>Go Back</p>
        </div>
      </NavLink>
      <div className="hero-content grid lg:grid-cols-2 w-full mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Welcome Back!
          </h1>
          <p className="py-6">
            Please log in to your account to access your dashboard and manage
            your ads.
          </p>
          <img src="" alt="" />
        </div>
        <div className="flex justify-end">
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div className="text-red-500">
                {error && <p className="">{error}</p>}
              </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-p border-none text-white">
                  Login
                </button>
              </div>
              
              <p className="text-center">
                Don&apos;t have any account ?{" "}
                <Link to={"/signUp"} className="text-p font-semibold">
                  Sign Up
                </Link>
              </p>
            </form>
            <div className="  w-full ">
              <div className="flex flex-col gap-2 mx-7 mb-7">
                <div className="w-1/2 mx-auto flex justify-center flex-col items-center">
                  <div className="divider divider-neutral">or</div>
                  <button onClick={() => handleGoogleLogin()} className="">
                    <FcGoogle className="text-3xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
