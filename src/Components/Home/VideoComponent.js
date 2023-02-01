import React from 'react'
import './VideoComponent.css'


function VideoComponent({testimonial}) {
  return (
        <div className="Video-component">
            <video src={testimonial} controls></video>
            <div>
                <h4>Vishal Bhatia</h4>
                <p>Teacher at Jaipuria</p>
            </div>
        </div>
    )
}

export default VideoComponent