import React from "react";
import Header from "../../Components/Header";
import { FaCheckCircle } from "react-icons/fa";
import Subscribe from "../Home/Subscribe/Subscribe";

const AboutUs = () => {
  return (
    <div>
      {Header("About Us", "We do great thing together")}
      <div className="">
        <div className="">
          <h4 className=" text-md text-p">About Us</h4>
          <h1 className="text-4xl font-bold  my-1">Our Background Story</h1>
          <p className=" max-w-md">
            In the real world, every Social media business is unique, so we take
            a customized approach for every business to grow. We don't just
            focus on one area of your business, like SEO or PPC advertising; we
            take a holistic view of your entire e-commerce ecosystem.
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-p" />
              Quality Service Guarenty
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-p" />
              ROI Based Digital Service
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-p" />
              24/7 Customer Support
            </p>
          </div>
        </div>
        <div className="text-right">
          <h4 className=" text-md text-p">Why Choose Us?</h4>
          <h1 className="text-4xl font-bold  my-1">Why You Should Work with AdAura  
</h1>
          <p className=" max-w-md text-right ms-auto">
            In the real world, every Social media business is unique, so we take
            a customized approach for every business to grow. We don't just
            focus on one area of your business, like SEO or PPC advertising; we
            take a holistic view of your entire e-commerce ecosystem.
          </p>
          <div className="flex items-end flex-col gap-2 mt-4">
            <p className="flex items-center gap-2">
             
              Transparent communication
              <FaCheckCircle className="text-p" />
            </p>
            <p className="flex items-center gap-2">
             
              Customize Strategy
              <FaCheckCircle className="text-p" />
            </p>
            <p className="flex items-center gap-2">
              
              Expert Team
              <FaCheckCircle className="text-p" />  
            </p>
            <p className="flex items-center gap-2">
             
              Knowledge Sharing
              <FaCheckCircle className="text-p" />

            </p>
          </div>
            
          </div>
        </div>

            <Subscribe></Subscribe>
      </div>
    
  );
};

export default AboutUs;
