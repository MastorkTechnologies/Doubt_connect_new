import React, { useState } from "react";
import "./Blog.css";
import Sidebar from "./SideBar";
import BlogList from "./BlogList";

function Blog() {
  const [BlogCategory, setBlogCategory] = useState("All");
  return (
    <div className="blog">
      <div className="sidebar">
        <Sidebar setBlogCategory={setBlogCategory} />
      </div>

      <div className="bloglist">
        <BlogList BlogCategory={BlogCategory} />
      </div>
    </div>
  );
}

export default Blog;
