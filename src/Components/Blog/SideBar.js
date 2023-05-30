import React, { useState, useEffect } from "react";
import "./SideBar.css";
// import { categorys } from "./List";
import * as api from "../../function/axiosReq";

const Sidebar = ({ setBlogCategory }) => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    getAPICategory();
  }, []);

  const getAPICategory = async () => {
    try {
      const res = await api.getCategories();
      setCategorys(res.data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };
  return (
    <div className="sidebar_content">
      {/* <h3>Blog Category</h3> */}
      <ul className="sidebar_ul">
        <>
          <li
            onClick={() => setBlogCategory("All")}
            style={{ cursor: "pointer" }}
          >
            All
          </li>
        </>
        {categorys.map((category, index) => {
          return (
            <>
              <li
                key={index}
                onClick={() => setBlogCategory(category._id)}
                style={{ cursor: "pointer" }}
              >
                {category._id}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
