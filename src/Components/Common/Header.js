import React from 'react'
import './Header.css'
import logo from '../../Assets/logo.png'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className='Header'>
        <img src={logo}></img>
        <div className='Header-options'>
            <Link to="/">Home</Link>
            <Link to="/for-tutors">For Tutors</Link>
            <Link to="/dc-for-schools">DC For Schools</Link>
        </div>
        <button className='Header-Sign-in'>Sign In/ Sign Up</button>
    </div>
  )
}

export default Header