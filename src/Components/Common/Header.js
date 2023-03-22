import React,{useState} from 'react'
import './Header.css'
import logo from '../../Assets/logo.webp'
import { Link } from "react-router-dom";
import logo2 from '../../Assets/logo2.svg'
import Overlay from './Overlay';


function Header() {

    const [openMenu,toggleOpenMenu] = useState(false)

    const handleShowMenu = () => {
        toggleOpenMenu(true)
        document.body.style.overflowY = "hidden"
    }

    const handleCloseMenu = () => {
        toggleOpenMenu(false)
        document.body.style.overflowY = "scroll"
    }

    return (
        <div className='Header'>
            
            {
                openMenu && <Overlay handleCloseMenu={handleCloseMenu}/>
            }


            <Link className='logos' onClick={()=>{window.scrollTo({top: 0})}} to="/">
                <img className='Logo-2' src={logo2}></img>
                <img className='Logo-1' src={logo}></img>
            </Link>
            {
                !openMenu && 
                <div className='Header-options'>
                    <Link onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth'})}} to="/">Home</Link>
                    <a href="https://doubtconnect.medium.com/" target="_blank">Blogs</a>
                    <Link onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth'})}} to="/for-tutors">For Tutors</Link>
                    <Link onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth'})}} to="/dc-for-students">DC For Students</Link>
                </div>
            }
            <button className='Header-Sign-in'>Sign In/ Sign Up</button>
            <button className='Header-menu-button' onClick={handleShowMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" color='white' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    )
}

export default Header
