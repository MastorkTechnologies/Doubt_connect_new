import React, { Fragment, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";

import VideoOverlay from "../VideoOverlay/VideoOverlay";
import fortutors_1 from '../../Assets/fortutors_1.png'
import fortutors_2 from '../../Assets/fortutors_2.png'
import fortutors_3 from '../../Assets/fortutors_3.png'


const Slider = () => {

    const [vId,setVid] = useState({})
    const [zIndex, setZIndex] = useState(-1)
    const portal = document.getElementById('portal-2')
    const [displayVideoOverlay,setDisplayVideoOverlay] = useState(false)
    const handleDisplayVideoOverlay = (id) => {
          setVid(id);
          setZIndex(11); 
          setDisplayVideoOverlay(true);
          document.body.style.overflowY = "hidden"
      };
    const handleCloseVideoOverlay = () => {
        setZIndex(-1); 
        setDisplayVideoOverlay(false);
        document.body.style.overflowY = "scroll"
    };

    useEffect(() => {
        portal.style.zIndex = zIndex
    }, [zIndex]);


  return (
    <Fragment>
        {
            displayVideoOverlay && <VideoOverlay handleCloseVideoOverlay={handleCloseVideoOverlay} vId={vId}></VideoOverlay>
        }
        <div className="Slider">
        <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay={false}
            showArrows={false}
            infiniteLoop={true}
        >
            {/* 1st slide  */}
            <div className="carousel-container">
            <div className="carousel-item">
                <img src={fortutors_1}></img>
                <button className='play-button' onClick={()=>handleDisplayVideoOverlay("jCMFplua9zQ")}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="17.905" cy="17.9045" rx="17.905" ry="17.9045" fill="white" fill-opacity="0.88"/>
                        <path d="M24.572 17.2454C25.1338 17.5697 25.1338 18.3804 24.572 18.7047L15.0929 24.1774C14.5312 24.5017 13.8291 24.0963 13.8291 23.4477L13.8291 12.5024C13.8291 11.8538 14.5312 11.4484 15.0929 11.7727L24.572 17.2454Z" fill="#52ACFF"/>
                    </svg>
                </button>
            </div>
            <div className="carousel-item">
                <img src={fortutors_2}></img>
                <button className='play-button' onClick={()=>handleDisplayVideoOverlay("MrP_0yAqk8A")}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="17.905" cy="17.9045" rx="17.905" ry="17.9045" fill="white" fill-opacity="0.88"/>
                        <path d="M24.572 17.2454C25.1338 17.5697 25.1338 18.3804 24.572 18.7047L15.0929 24.1774C14.5312 24.5017 13.8291 24.0963 13.8291 23.4477L13.8291 12.5024C13.8291 11.8538 14.5312 11.4484 15.0929 11.7727L24.572 17.2454Z" fill="#52ACFF"/>
                    </svg>
                </button>
            </div>
            <div className="carousel-item">
                <img src={fortutors_3}></img>
                <button className='play-button' onClick={()=>handleDisplayVideoOverlay("tBX301uvkmE")}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="17.905" cy="17.9045" rx="17.905" ry="17.9045" fill="white" fill-opacity="0.88"/>
                        <path d="M24.572 17.2454C25.1338 17.5697 25.1338 18.3804 24.572 18.7047L15.0929 24.1774C14.5312 24.5017 13.8291 24.0963 13.8291 23.4477L13.8291 12.5024C13.8291 11.8538 14.5312 11.4484 15.0929 11.7727L24.572 17.2454Z" fill="#52ACFF"/>
                    </svg>
                </button>
            </div>
            </div>

            {/* 2nd slide */}

            <div className="carousel-container">
            <div className="carousel-item">
                <img src={fortutors_2}></img>
                <button className='play-button' onClick={()=>handleDisplayVideoOverlay("MrP_0yAqk8A")}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="17.905" cy="17.9045" rx="17.905" ry="17.9045" fill="white" fill-opacity="0.88"/>
                        <path d="M24.572 17.2454C25.1338 17.5697 25.1338 18.3804 24.572 18.7047L15.0929 24.1774C14.5312 24.5017 13.8291 24.0963 13.8291 23.4477L13.8291 12.5024C13.8291 11.8538 14.5312 11.4484 15.0929 11.7727L24.572 17.2454Z" fill="#52ACFF"/>
                    </svg>
                </button>
            </div>
            <div className="carousel-item">
                <img src={fortutors_1}></img>
                <button className='play-button' onClick={()=>handleDisplayVideoOverlay("jCMFplua9zQ")}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="17.905" cy="17.9045" rx="17.905" ry="17.9045" fill="white" fill-opacity="0.88"/>
                        <path d="M24.572 17.2454C25.1338 17.5697 25.1338 18.3804 24.572 18.7047L15.0929 24.1774C14.5312 24.5017 13.8291 24.0963 13.8291 23.4477L13.8291 12.5024C13.8291 11.8538 14.5312 11.4484 15.0929 11.7727L24.572 17.2454Z" fill="#52ACFF"/>
                    </svg>
                </button>
            </div>
            <div className="carousel-item">
                <img src={fortutors_3}></img>
                <button className='play-button' onClick={()=>handleDisplayVideoOverlay("tBX301uvkmE")}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="17.905" cy="17.9045" rx="17.905" ry="17.9045" fill="white" fill-opacity="0.88"/>
                        <path d="M24.572 17.2454C25.1338 17.5697 25.1338 18.3804 24.572 18.7047L15.0929 24.1774C14.5312 24.5017 13.8291 24.0963 13.8291 23.4477L13.8291 12.5024C13.8291 11.8538 14.5312 11.4484 15.0929 11.7727L24.572 17.2454Z" fill="#52ACFF"/>
                    </svg>
                </button>
            </div>
            </div>

            {/* 3rd slide  */}
            <div className="carousel-container">
            <div className="carousel-item">
                <img src={fortutors_3}></img>
                <button className='play-button' onClick={()=>handleDisplayVideoOverlay("tBX301uvkmE")}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="17.905" cy="17.9045" rx="17.905" ry="17.9045" fill="white" fill-opacity="0.88"/>
                        <path d="M24.572 17.2454C25.1338 17.5697 25.1338 18.3804 24.572 18.7047L15.0929 24.1774C14.5312 24.5017 13.8291 24.0963 13.8291 23.4477L13.8291 12.5024C13.8291 11.8538 14.5312 11.4484 15.0929 11.7727L24.572 17.2454Z" fill="#52ACFF"/>
                    </svg>
                </button>
            </div>
            <div className="carousel-item">
                <img src={fortutors_1}></img>
                <button className='play-button' onClick={()=>handleDisplayVideoOverlay("jCMFplua9zQ")}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="17.905" cy="17.9045" rx="17.905" ry="17.9045" fill="white" fill-opacity="0.88"/>
                        <path d="M24.572 17.2454C25.1338 17.5697 25.1338 18.3804 24.572 18.7047L15.0929 24.1774C14.5312 24.5017 13.8291 24.0963 13.8291 23.4477L13.8291 12.5024C13.8291 11.8538 14.5312 11.4484 15.0929 11.7727L24.572 17.2454Z" fill="#52ACFF"/>
                    </svg>
                </button>
            </div>
            <div className="carousel-item">
                <img src={fortutors_2}></img>
                <button className='play-button' onClick={()=>handleDisplayVideoOverlay("MrP_0yAqk8A")}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="17.905" cy="17.9045" rx="17.905" ry="17.9045" fill="white" fill-opacity="0.88"/>
                        <path d="M24.572 17.2454C25.1338 17.5697 25.1338 18.3804 24.572 18.7047L15.0929 24.1774C14.5312 24.5017 13.8291 24.0963 13.8291 23.4477L13.8291 12.5024C13.8291 11.8538 14.5312 11.4484 15.0929 11.7727L24.572 17.2454Z" fill="#52ACFF"/>
                    </svg>
                </button>
            </div>
            </div>
        </Carousel>
        </div>
    </Fragment>
  );
};

export default Slider;
