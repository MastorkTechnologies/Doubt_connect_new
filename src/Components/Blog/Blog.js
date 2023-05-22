import React from "react";
import "./Blog.css";
import blog1 from "../../Assets/blog1.webp";
import blog2 from "../../Assets/blog2.webp";
import blog3 from "../../Assets/blog3.webp";

function Blog() {
  return (
    <div className="Blog">
      <div className="Sidebar">
        <ul className="Categories">
        <h3> Blog Category</h3>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          {/* Add more categories here */}
        </ul>
      </div>
    <div className="blogdisplay">
      <div className="Blog-container TopOne">
        <img src={blog1}></img>
        <div className="Blog-breif">
          <div className="tag-n-date">
            <h4>PRODUCT</h4>
            <p>January 24, 2023</p>
          </div>

          <h2>
            Interview - what it's like to work remotely in big size product
            development company
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad{" "}
          </p>

          <a href="#"> Read More...</a>
        </div>
      </div>

      <div className="Blogs">
        <div className="Blog-container">
          <img src={blog2}></img>
          <div className="Blog-breif">
            <div className="tag-n-date">
              <h4>PRODUCT</h4>
              <p>January 24, 2023</p>
            </div>

            <h2>
              Interview - what it's like to work remotely in big size product
              development company
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad{" "}
            </p>

            <a href="#"> Read More...</a>
          </div>
        </div>

        <div className="Blog-container">
          <img src={blog3}></img>
          <div className="Blog-breif">
            <div className="tag-n-date">
              <h4>PRODUCT</h4>
              <p>January 24, 2023</p>
            </div>

            <h2>
              Interview - what it's like to work remotely in big size product
              development company
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad{" "}
            </p>

            <a href="#"> Read More...</a>
          </div>
        </div>

        <div className="Blog-container">
          <img src={blog2}></img>
          <div className="Blog-breif">
            <div className="tag-n-date">
              <h4>PRODUCT</h4>
              <p>January 24, 2023</p>
            </div>

            <h2>
              Interview - what it's like to work remotely in big size product
              development company
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad{" "}
            </p>

            <a href="#"> Read More...</a>
          </div>
        </div>

        <div className="Blog-container">
          <img src={blog3}></img>
          <div className="Blog-breif">
            <div className="tag-n-date">
              <h4>PRODUCT</h4>
              <p>January 24, 2023</p>
            </div>

            <h2>
              Interview - what it's like to work remotely in big size product
              development company
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad{" "}
            </p>

            <a href="#"> Read More...</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Blog;
