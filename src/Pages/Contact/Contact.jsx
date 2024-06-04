import React from "react";
import Header from "../../Components/Header";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
    const handleSubmit=()=>{

    }
  return (
    <div className="mx-10">
      {Header("Contact", "Feel free to get in touch")}
      <div className="grid grid-cols-1 md:grid-cols-2 py-10">
        <div className="">
          <h1 className="text-4xl font-bold my-1">Please get in touch.</h1>
          <p className=" max-w-md ">
            We're here to help you with any questions or support you need.
            Contact us to start your journey with AdAura.
          </p>
          <div className="flex items-center gap-6 mt-5">
            <div className="w-14 h-14 bg-[#ffece8] flex justify-center items-center rounded-xl">
              <FaPhone className="text-p text-2xl" />
            </div>
            <div className="">
              <p className="text-slate-500">Call Us</p>
              <p>01786076080</p>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-3">
            <div className="w-14 h-14 bg-[#ffece8] flex justify-center items-center rounded-xl">
              <IoMail className="text-p text-2xl" />
            </div>
            <div className="">
              <p className="text-slate-500">Mail Us</p>
              <p>raihanjamikhan@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="form-control">
            <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <div className="form-control">
             
              
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <div className="form-control">
              
              <input
                name="number"
                type="number"
                placeholder="Number"
                className="input input-bordered focus:outline-none focus:border-orange-500"
                required
              />
              
              
            </div>
            <div className="form-control">
              
            <textarea className="textarea textarea-bordered focus:outline-none focus:border-orange-500" required placeholder="Message"></textarea>


              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-p border-none text-white">
                Submit
              </button>
            </div>

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
