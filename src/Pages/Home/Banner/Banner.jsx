import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero my-3">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl "><span className="font-bold">Grow</span> Your <span className="font-bold after:content-[url(https://biggapon.vercel.app/static/media/hero_animation_1.bb7044bf2af91bb7d39e.svg)] md:after:inline-block after:h-16 relative after:absolute after:-top-6 after:-right-11 after:hidden">Social Media
          </span> Business <span className="font-bold">Sales</span> and <span className="font-bold">Revenue</span></h1>
          <p className="py-6">
          Maximize Your small medium Social Media business Conversion Rate with Our Data-Driven Growth Strategies and Insights.
          </p>
          <NavLink to={'/contact'} className="btn bg-p text-white">Yes I Want to Grow</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
