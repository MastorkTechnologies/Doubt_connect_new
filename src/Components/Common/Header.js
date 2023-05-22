import React,{useState} from 'react'
import './Header.css'
import logo from '../../Assets/logo.webp'
import { Link } from "react-router-dom";
import logo2 from '../../Assets/logo2.svg'
import Overlay from './Overlay';

function Header() {
    const [openMenu, toggleOpenMenu] = useState(false);
  
    const handleShowMenu = () => {
      toggleOpenMenu(true);
      document.body.style.overflowY = "hidden";
    };
  
    const handleCloseMenu = () => {
      toggleOpenMenu(false);
      document.body.style.overflowY = "scroll";
    };
  
    return (
      <div className="Header">
        {openMenu && <Overlay handleCloseMenu={handleCloseMenu} />}
  
        <Link
          className="logos"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
          to="/"
        >
          <img className="Logo-2" src={logo2}></img>
          <img className="Logo-1" src={logo}></img>
        </Link>
        {!openMenu && (
          <div className="Header-options">
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/"
            >
              Home
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/blogs"
            >
              Blogs
            </Link>
            {/* <a href="https://doubtconnect.medium.com/" target="_blank">
              Blogs
            </a> */}
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/for-tutors"
            >
              For Tutors
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/dc-for-students"
            >
              DC For Students
            </Link>
          </div>
        )}
  
        <div class="wrapper">
        {/* <button className="Header-Sign-in"> */}
        <Link to='https://forms.gle/YuMS2ajC7TZcAN6d9' target="_blank" className="Header-Sign-in"> Download the APP! 
  
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor" height="20" width="20"><title>Google Play</title><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" id="mainIconPathAttribute" stroke-width="0" stroke="#ff0000"></path></svg></Link>
          
         
        {/* </button> */}
        {!openMenu && (
          <button className="Header-options Header-Sign-in">Sign In/ Sign Up</button>
        )}
        </div>
        <button className="Header-menu-button" onClick={handleShowMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            color="white"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    );
  }
  
  export default Header;