// BlogList.js
import React, { useEffect, useState } from "react";
import "./BlogList.css";
import "./testBlog.css";
import { Link } from "react-router-dom";
import * as api from "../../function/axiosReq";
import blog3 from "../../Assets/blog3.webp";

import { blogs } from "./List";
const BlogList = ({ BlogCategory }) => {
  const [BlogsList, setBlogsList] = useState([]);
  useEffect(() => {
    getAPIBlogs();
    // console.log("location- ",location.pathname + location.search)
    console.log("BlogCategory- ", BlogCategory);
  }, [BlogCategory]);

  const getAPIBlogs = async () => {
    try {
      const res = await api.getBlog();
      setBlogsList(res.data);
      // console.log("Blogs", res.data)
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  return (
    <div className="blog-list">
      <div className="Blogs">
        {BlogsList.map((blog, index) => {
          if (BlogCategory == "All" || blog.category == BlogCategory) {
            const formattedDate = new Date(blog.createdAt).toLocaleString();
            const formattedResponse = { __html: `${blog.content.slice(0, 250)}...` };
            return (
              <div className="Blog-container">
                <img src={blog.cover_image} alt="Blog Image" />
                <div className="Blog-breif">
                  <div className="tag-n-date">
                    <h4>{blog.category}</h4>
                    <p>{formattedDate}</p>
                  </div>
                  <h2>{blog.title}</h2>
                  <p className="Sblog-content" dangerouslySetInnerHTML={formattedResponse}></p>

                  {/* <p>{blog.content.slice(0, 250)}...</p>{" "} */}
                  {/* Display first 150 characters of content */}
                  <Link
                    to={`/${blog.category}/${blog.url}-${blog._id}`}
                    key={blog.title}
                  >
                    Read More...
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default BlogList;
