import React from "react";
import img1 from "../assets/animation_header1.svg"
import img2 from "../assets/animatio_header2.svg"
const Header = (firstHeader, secondHeader) => {
  return (
    <div className="pt-10  relative mb-10">
<img className="absolute animate-bounce	  bottom-0 left-12" src={img1} alt="" />
<img className="absolute animate-ping	  bottom-0 right-12" src={img2} alt="" />
      <h4 className="text-center text-md text-slate-600">{firstHeader}</h4>
      <h1 className="text-4xl font-bold text-center my-1">{secondHeader}</h1>
    </div>
  );
};

export default Header;
