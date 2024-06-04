import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-slate-950 flex flex-col justify-center items-center gap-5 py-16 rounded-e-3xl my-10">
      <h1 className="text-white text-3xl font-bold">
        Stay Updated By Subscribing Our Newsletter
      </h1>
      <p className="text-white max-w-lg text-center">
        Create an account to start designing and managing your innovative ad
        campaigns. Stay updated by subscribing to our newsletter.
      </p>
      <div className="join">
        <input className="input input-bordered join-item" placeholder="Email" />
        <button className="btn join-item rounded-r-full">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
