import React from "react";
import Header from "../../Components/Header";

const Blog = () => {
  return (
    <div>
      {Header("Blog", "Visit our blog website")}

      <p className="m-10 text-xl text-slate-500">Blogs not publish yet</p>
    </div>
  );
};

export default Blog;
