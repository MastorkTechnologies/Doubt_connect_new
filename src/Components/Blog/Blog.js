import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogs } from "./List";
import * as api from "../../function/axiosReq";

import blog3 from "../../Assets/blog3.webp";
import "./SingleBlog.css";
function BlogPost() {
  const [formattedResponse, setformattedResponse] = useState(null)
  // const formattedResponse = { __html: apiResponse };
  const { category, title } = useParams();
  console.log();
  const navigate = useNavigate();
  const [blog, setBlog] = useState([])
  const [formattedDate, setDate] = useState()

  // Remove the last ID
  const lastId = title.substring(title.lastIndexOf("-") + 1);
  useEffect(() => {
    getAPISingleBlogs(lastId)
    // console.log("location- ",location.pathname + location.search)
  }, [lastId]);

  const getAPISingleBlogs = async (lastId) => {
    try {
      const res = await api.getSingleBlog(lastId);
      setBlog(res.data)
      setDate(new Date(res.data.createdAt).toLocaleString())
      const formattedResponse = { __html: res.data.content };
      setformattedResponse(formattedResponse)
      // setBlogsList(res.data)
      console.log("single Blogs", res.data)
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };
  // Find the corresponding blog object based on the ID
  // const blog = blogs.find((blog) => blog._id == lastId);

  if (!blog) {
    // Handle case when blog is not found
    return <div>Blog not found</div>;
  }

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="Sblog-container">
      {/* <div>
        <img className="Sblog-image" src={blog.cover_image}></img>
      </div> */}
      <div className="Sblog-info">
        <div className="Sblog-cate">
          <div className="Sblog-date">{formattedDate}</div>
          <div className="Sblog-category">{blog.category?.chapter}</div>
        </div>
        <h2 className="Sblog-title">{blog.title}</h2>
        {/* <p className="Sblog-content">{blog.content}</p> */}
        <p className="Sblog-content" dangerouslySetInnerHTML={formattedResponse}></p>
      </div>
    </div>
  );
}

export default BlogPost;
