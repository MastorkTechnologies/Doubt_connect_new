import React,{Fragment, useEffect} from 'react'
import reactDom from 'react-dom'
import './VideoOverlay.css'

function VideoOverlay({data, handleCloseVideoOverlay,zIndex}){

    const portal = document.getElementById('portal-2')

    useEffect(()=>{
        portal.style.zIndex = zIndex
    },[])

    return reactDom.createPortal(
        <Fragment>
            <div onClick={ handleCloseVideoOverlay} className='video-overlay-wrapper'></div>
            <iframe
                className='overlay-iframe'
                style={{
                    position: "absolute",
                    top : data.data.top
                }}

                src={`https://www.youtube.com/embed/${data.vid}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </Fragment>
        ,portal)
}

export default VideoOverlay