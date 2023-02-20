import React,{Fragment} from 'react'
import reactDom from 'react-dom'
import {Link} from "react-router-dom";
import "./Overlay.css"


function Overlay({handleCloseMenu}) {
    
    const portal = document.getElementById('portal')

    setTimeout(() => {
        const element = document.querySelector('.Header-options');
        element.classList.add('Menu-open');
    }, 50);
    
    return reactDom.createPortal(
        <div onClick={()=>handleCloseMenu()} className='overlay-wrapper'>
            <div onClick={()=>handleCloseMenu()} className='Header-options'>
                <Link to="/">Home</Link>
                <a href="https://doubtconnect.medium.com/">Blogs</a>
                <Link to="/for-tutors">For Tutors</Link>
                <Link to="/dc-for-students">DC For Students</Link>
            </div>
        </div>
        ,portal)
}

export default Overlay