/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

export default function AdCard({ ad }) {
  return (
    <div className="card  bg-base-100 shadow-xl border border-white hover:border-black my-20">
      <figure>
        <img src={ad?.image} alt="food" className="max-w-50" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{ad?.name}</h2>
        <h2 className="card-title">Price: {ad?.price}</h2>
        <h2 className="card-title">Duration: {ad?.duration}</h2>
        
        <div className="card-actions justify-between items-center">
            <NavLink to={`/`} className="btn btn-outline btn-success hover:text-white">See Details</NavLink>
            
          <div className="badge badge-outline">{ad?.category}</div>
            </div>

      </div>
    </div>
  );
}
