import React from "react";
import Header from "../../Components/Header";
import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      {Header("Services", "What we do")}
      <div className="grid grid-cols-1 gap-5 ">
        {/* 1 */}
        <div className="  p-10 rounded-2xl">
          <img className="text-black" src={""} alt="" />
          <h1 className="font-bold text-2xl my-2">
            Social Media Business Strategy
          </h1>
          <p className=" max-w-3xl">
            As an Social Media business development agency, we offer a
            personalized approach to each of our clients, taking into account
            their unique needs and goals, and providing a comprehensive strategy
            that covers all aspects of their online business.
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
        {/* 2 */}
        <div className="  p-10 rounded-2xl">
          <img className="text-black" src={""} alt="" />
          <h1 className="font-bold text-2xl my-2">
            Store Design and Development
          </h1>
          <p className=" max-w-3xl">
            A Standard Store combination of technical expertise, creativity, and
            user-centric design principles. The process requires careful
            planning, attention to detail, and a deep understanding of the
            target audience in order to create a successful online store that is
            optimized for sales, customer satisfaction, and long-term growth.
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
        {/* 3 */}
        <div className="  p-10 rounded-2xl">
          <img className="text-black" src={""} alt="" />
          <h1 className="font-bold text-2xl my-2">
            Sales & Brand oriented Content
          </h1>
          <p className=" max-w-3xl">
            Content, taking various forms like blogs, social media updates,
            product descriptions, and ads, requires different content formats
            such as static design, motion graphics, and videos, all customized
            to engage and convert the target audience. As an agency, we offer
            tailored content strategies that drive growth and results.
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
        {/* 4 */}
        <div className="  p-10 rounded-2xl">
          <img className="text-black" src={""} alt="" />
          <h1 className="font-bold text-2xl my-2">
            Digital Campaign Management
          </h1>
          <p className=" max-w-3xl">
            Let our experienced e-commerce agency take your online presence to
            new heights with expert management of Facebook, Google, and TikTok
            ads, and a comprehensive approach to driving conversions and
            increasing your ROI
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
        {/* 5 */}
        <div className="  p-10 rounded-2xl">
          <img className="text-black" src={""} alt="" />
          <h1 className="font-bold text-2xl my-2">
            Conversion Rate Optimization
          </h1>
          <p className=" max-w-3xl">
            Our experienced team will conduct a comprehensive analysis of your
            website's user experience, conduct thorough testing, and implement
            the best strategies to attract, engage, and convert your website
            visitors.
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
        {/* 6 */}
        <div className="  p-10 rounded-2xl">
          <img className="text-black" src={""} alt="" />
          <h1 className="font-bold text-2xl my-2">
            Data tracking and web Analytics
          </h1>
          <p className=" max-w-3xl">
            In Data Tracking and Web Analytics Phase, we, track, collect,
            measure, and analyze data in order to gain insights and make
            informed decisions. using tools such as Google Analytics, heat
            mapping software, and user surveys to gather data on website
            visitors, their behavior, and their preferences
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
      </div>
    </div>
  );
};

export default Services;
