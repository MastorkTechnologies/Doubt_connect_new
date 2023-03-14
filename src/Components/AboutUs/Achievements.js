import React,{useEffect} from 'react'
import achievement1 from '../../Assets/achievements1.png'
import achievements2 from '../../Assets/achievements2.png'
import './Achievements.css'


function Achievements() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='Achievements'>
        
        <h1 className='Achievements-heading'>Our <span>Achievements</span></h1>
        <div className='Achievements-container'>
                <img src={achievement1} className="thisImg1"></img>
                <h1 className='Achievements-heading'>Winners at <br/><span>BITS Pilani's APOGEE 2022</span></h1>
                <img src={achievement1} className="thisImg2"></img>
        </div>

        <div className='Achievements-container'>
                <h1 className='Achievements-heading'>Runners Up at <br/><span>EOGSEA, Mumbai 2023</span></h1>
                <img src={achievements2} className="achievements"></img>
        </div>
    </div>
)}

export default Achievements