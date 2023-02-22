import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";

const Slider = () => {
  return (
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
            <iframe
              src="https://www.youtube.com/embed/WA61tUNIZwM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="info">
                <span>Shalini Sinha</span>
                <p>Professor at IIT Bombay</p>
            </div>
          </div>
          <div className="carousel-item">
            <iframe
              src="https://www.youtube.com/embed/WA61tUNIZwM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="info">
                <span>Shalini Sinha</span>
                <p>Professor at IIT Bombay</p>
            </div>
          </div>
          <div className="carousel-item">
            <iframe
              src="https://www.youtube.com/embed/WA61tUNIZwM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="info">
                <span>Shalini Sinha</span>
                <p>Professor at IIT Bombay</p>
            </div>
          </div>
        </div>

        {/* 2nd slide */}

        <div className="carousel-container">
          <div className="carousel-item">
            <iframe
              src="https://www.youtube.com/embed/WA61tUNIZwM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="info">
                <span>Shalini Sinha</span>
                <p>Professor at IIT Bombay</p>
            </div>
          </div>
          <div className="carousel-item">
            <iframe
              src="https://www.youtube.com/embed/WA61tUNIZwM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="info">
                <span>Shalini Sinha</span>
                <p>Professor at IIT Bombay</p>
            </div>
          </div>
          <div className="carousel-item">
            <iframe
              src="https://www.youtube.com/embed/WA61tUNIZwM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="info">
                <span>Shalini Sinha</span>
                <p>Professor at IIT Bombay</p>
            </div>
          </div>
        </div>

        {/* 3rd slide  */}
        <div className="carousel-container">
          <div className="carousel-item">
            <iframe
              src="https://www.youtube.com/embed/WA61tUNIZwM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="info">
                <span>Shalini Sinha</span>
                <p>Professor at IIT Bombay</p>
            </div>
          </div>
          <div className="carousel-item">
            <iframe
              src="https://www.youtube.com/embed/WA61tUNIZwM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="info">
                <span>Shalini Sinha</span>
                <p>Professor at IIT Bombay</p>
            </div>
          </div>
          <div className="carousel-item">
            <iframe
              src="https://www.youtube.com/embed/WA61tUNIZwM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="info">
                <span>Shalini Sinha</span>
                <p>Professor at IIT Bombay</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
