import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import axios from "axios";
import AdCard from "./AdCard";

const Blog = () => {

const [ads, setAds] = useState()
useEffect(()=>{

  axios.get(`https://ad-aura-server.vercel.app/ads`).then((res) => {
    setAds(res.data);
  })
},[])

console.log(ads)

  return (
    <div className="">
      {Header("Packages", "Visit our Packages")}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-20 w-2/3 mx-auto ">
          { ads && ads.map((ad) => (
              <AdCard key={ad?._id} ad={ad} />
            ))}
        </div>
    </div>
  );
};

export default Blog;
