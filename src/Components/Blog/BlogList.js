// BlogList.js
import React, { useEffect, useState } from "react";
// import "./BlogList.css";
// import "./testBlog.css";

import "./BlogData.css";
import { Link } from "react-router-dom";
import * as api from "../../function/axiosReq";
import blog3 from "../../Assets/blog3.webp";
import blog1 from "../../Assets/blog1.webp";
import blog2 from "../../Assets/blog2.webp";

import { blogs } from "./List";
const BlogList = ({ Blogs }) => {
  // console.log("Blogs", Blogs)
  const [BlogsList, setBlogsList] = useState([]);

  // console.log("BlogsList", BlogsList);
  useEffect(() => {
    if (Blogs == null) {
      getAPIBlogs();
    } else {
      setBlogsList(Blogs);
    }
  }, [Blogs]);

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
    <>
      <div className="Blog">
        {BlogsList.length > 0 ? (
          <>
            {BlogsList.map((blog, index) => {
              if (index == 0) {
                const formattedResponse = {
                  __html: `${blog.content
                    .replace(/<img[^>]*>/g, "") // Remove <img> tags
                    .slice(0, 250)}...`,
                };
                const formattedDate = new Date(
                  blog.createdAt
                ).toLocaleDateString("en", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                });

                return (
                  <div className="Blog-container TopOne">
                    <img className="Blogimage" src={blog.images[0]}></img>
                    <div className="Blog-breif">
                      <div className="tag-n-date">
                        <h4>{blog.category?.chapter}</h4>
                        <p>{formattedDate}</p>
                      </div>

                      <h2>{blog.title}</h2>

                      <p
                        className="Sblog-content"
                        dangerouslySetInnerHTML={formattedResponse}
                      ></p>

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
            <div className="Blogs">
              {BlogsList.map((blog, index) => {
                if (index > 0) {
                  const formattedResponse = {
                    __html: `${blog.content
                      .replace(/<img[^>]*>/g, "") // Remove <img> tags
                      .slice(0, 250)}...`,
                  };
                  const formattedDate = new Date(
                    blog.createdAt
                  ).toLocaleDateString("en", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  });
                  return (
                    <div className="Blog-container" key={index}>
                      <img className="Blogimage" src={blog.images[0]} alt="Blog Image" />
                      <div className="Blog-brief">
                        <div className="tag-n-date">
                          <h4>{blog.category?.chapter}</h4>
                          <p>{formattedDate}</p>
                        </div>
                        <h2>{blog.title}</h2>
                        <p
                          className="Sblog-content"
                          dangerouslySetInnerHTML={formattedResponse}
                        ></p>
                        <Link
                        to={`/${blog.category?.chapter}/${blog.url}-${blog._id}`}
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
          </>
        ) : (
          <h1>No result</h1>
        )}
      </div>
    </>
  );
};

export default BlogList;

{
  /* 
          <div className="blog-list">
<div className="Blogs">
  This is a multi-line comment in React
  You can write multiple lines here
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

                  <p>{blog.content.slice(0, 250)}...</p>{" "} 
             
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
      */
}
