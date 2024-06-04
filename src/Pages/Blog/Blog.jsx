import React from "react";
import Header from "../../Components/Header";

const Blog = () => {
  return (
    <div className="h-[50vh]">
      {Header("Blog", "Visit our blog website")}

      <p className="m-10 pt-10 animate-pulse   text-xl text-slate-500 ">Blogs not publish yet</p>
    </div>
  );
};

export default Blog;
