import React,{Fragment, useEffect, useState} from 'react'
import reactDom from 'react-dom'
import './VideoOverlay.css'

function VideoOverlay({vId,handleCloseVideoOverlay}){

    const portal = document.getElementById('portal-2')

    return reactDom.createPortal(
        <Fragment>
            <div onClick={ handleCloseVideoOverlay} className='video-overlay-wrapper'></div>
            <iframe
                className='overlay-iframe'
                src={`https://www.youtube.com/embed/${vId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </Fragment>
        ,portal)
}

export default VideoOverlay