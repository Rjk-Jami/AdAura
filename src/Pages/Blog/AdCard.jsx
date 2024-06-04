/* eslint-disable react/prop-types */

export default function AdCard({ ad }) {
  return (
    <div className="card  bg-base-100 shadow-xl border border-white hover:border-black my-20">
      <figure>
        <img src={ad?.image} alt="food" className="max-w-50" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{ad?.name}</h2>
        <h2 className="card-title">Price: {ad?.price}</h2>
        <h2 className="card-title">duration: {ad?.duration}</h2>
        
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{ad?.category}</div>
        </div>
      </div>
    </div>
  );
}
