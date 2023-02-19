import React,{useRef} from 'react'
import './Header.css'
import logo from '../../Assets/logo.png'
import { Link } from "react-router-dom";
import logo2 from '../../Assets/logo2.svg'

function Header() {

    const menu= useRef()

    const HandleShowMenu = ()=>{

        if(menu.current.classList.contains("Menu-open")){
            menu.current.classList.remove("Menu-open")
        }
        else{
            menu.current.classList.add("Menu-open")
        }
            
    }

    return (
        <div className='Header'>
            <img className='Logo-2' src={logo2}></img>
            <img className='Logo-1' src={logo}></img>
            <div onClick={HandleShowMenu} className='Header-options' ref={menu}>
                <Link to="/">Home</Link>
                <a href="https://doubtconnect.medium.com/">Blogs</a>
                <Link to="/for-tutors">For Tutors</Link>
                <Link to="/dc-for-schools">DC For Schools</Link>
            </div>
            <button className='Header-Sign-in'>Sign In/ Sign Up</button>
            <button className='Header-menu-button' onClick={HandleShowMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" color='white' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    )
}

export default Header