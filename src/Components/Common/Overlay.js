import React, { Fragment } from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import "./Overlay.css";

function Overlay({ handleCloseMenu }) {
  const portal = document.getElementById("portal");

  setTimeout(() => {
    const element = document.querySelector(".Header-options");
    element.classList.add("Menu-open");
  }, 50);

  return reactDom.createPortal(
    <div onClick={() => handleCloseMenu()} className="overlay-wrapper">
      <div onClick={() => handleCloseMenu()} className="Header-options">
        <Link
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          Sign In/ Sign Up
        </Link>
        <Link
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
          to="/blogs"
        >
          Blogs
        </Link>
        <Link
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
          to="/for-tutors"
        >
          For Tutors
        </Link>
        <Link
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
          to="/dc-for-students"
        >
          DC For Students
        </Link>
      </div>
    </div>,
    portal
  );
}

export default Overlay;
