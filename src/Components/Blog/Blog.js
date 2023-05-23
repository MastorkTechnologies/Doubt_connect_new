import React from "react";
import './Blog.css';
import Sidebar from './SideBar';
import BlogList from './BlogList';

function Blog() {
  return (
    <div className="blog">
      <Sidebar />
      <BlogList />  
    </div>
  );
}

export default Blog;
