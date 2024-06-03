import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import useAuth from "../../../Components/hooks/useAuth";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const {user,
        googleLogin, 
        EmailPassLogin,
        createUser,
        logout,
        authLoading} =useAuth() 
        const navigate = useNavigate();
        const handleSubmit = async(e) => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
           await createUser(email, password);
          };
          let from = location.state?.from?.pathname || "/";
          useEffect(() => {
            if (user) {
              navigate(from, { replace: true });
            }
          }, [user, authLoading, navigate, from]);
    return (
        <div className="hero min-h-screen bg-base-200 relative">
       <NavLink to={from}>
        {" "}
        <div className="flex gap-2 items-center absolute left-0 top-0 z-40 m-5 text-ad">
          <FaLongArrowAltLeft />
          <p>Go Back</p>
        </div>
      </NavLink>
      <div className="hero-content grid lg:grid-cols-2 w-full mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Join AdAura Today!</h1>
          <p className="py-6">
          Create an account to start designing and managing your innovative ad campaigns.</p>
        </div>
        <div className=" card shadow-2xl bg-base-100 max-w-lg">
          <form onSubmit={handleSubmit} className="card-body  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary bg-p border-none text-white">Sign Up</button>
              <p className="text-center">
                Already have an account ?{" "}
                <Link to={"/login"} className="text-p font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </form>
          <div className="  w-full ">
              <div className="flex flex-col gap-2 mx-7 mb-7">
                <div className="w-1/2 mx-auto flex justify-center flex-col items-center">
                  <div className="divider divider-neutral">or</div>
                  <button
                    onClick={() => googleLogin()}
                    className=""
                  >
                    <FcGoogle className="text-3xl" />
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;