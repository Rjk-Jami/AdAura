import React from "react";

const Process = () => {
  return (
    <div className="m-10">
      <h4 className="text-center text-md text-p">Process</h4>
      <h1 className="text-4xl font-bold text-center my-1">Our Work Process</h1>
      <p className="text-center max-w-md mx-auto">
        As an Social media agency, our work process may vary depending on your
        specific services and client needs. However, here is a general outline
      </p>
      <div className="my-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {/* 1 */}
        <div className=" border hover:shadow-2xl p-10 rounded-2xl">
          <h4 className="text-2xl relative after:bg-[#ffe4d1] after:absolute after:w-10 after:h-10 after:rounded-full after:-left-5 after:-top-3 after:-z-10">
            01
          </h4>

          <h1 className="font-bold text-2xl my-2">Audit</h1>
          <p className="">
            In the Audit phase, we will gather information about the client's
            business, target audience, goals, and existing e-commerce setup.
          </p>
        </div>
        {/* 2 */}
        <div className=" border hover:shadow-2xl p-10 rounded-2xl">
          <h4 className="text-2xl relative after:bg-[#ffe6ec] after:absolute after:w-10 after:h-10 after:rounded-full after:-left-5 after:-top-3 after:-z-10">
            02
          </h4>

          <h1 className="font-bold text-2xl my-2">Action Plan</h1>
          <p className="">
            Based on past & present business data, we prepared a detailed Action
            oriented plan for how we can achieve your goals.
          </p>
        </div>
        {/* 3 */}
        <div className=" border hover:shadow-2xl p-10 rounded-2xl">
          <h4 className="text-2xl relative after:bg-[#e6e3ff] after:absolute after:w-10 after:h-10 after:rounded-full after:-left-5 after:-top-3 after:-z-10">
            03
          </h4>

          <h1 className="font-bold text-2xl my-2">Test and Trial</h1>
          <p className="">
            Digital Space always changing, so we need to test and trial our
            action plan to Find the best strategy for business.
          </p>
        </div>
        {/* 4 */}
        <div className=" border hover:shadow-2xl p-10 rounded-2xl">
          <h4 className="text-2xl relative after:bg-[#fff6d8] after:absolute after:w-10 after:h-10 after:rounded-full after:-left-5 after:-top-3 after:-z-10">
            04
          </h4>

          <h1 className="font-bold text-2xl my-2">Growth</h1>
          <p className="">
            after the test and trial period, we will find some strategies that
            best fit your business. Then we work on leveraging strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
