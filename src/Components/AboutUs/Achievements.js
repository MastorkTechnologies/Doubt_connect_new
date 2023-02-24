import React,{useEffect} from 'react'
import achievement1 from '../../Assets/achievements1.png'
import achievements2 from '../../Assets/achievements2.png'



function Achievements() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='AboutUs'>
        
        <h1 className='AboutUs-heading'>Our <span>Achievements</span></h1>
        <div className='AboutUs-container'>
                <img src={achievement1}></img>
                <div>
                    <h1 className='AboutUs-heading'>Winners at <br/><span>BITS Pilani's APOGEE 2022</span></h1>
                </div>
        </div>

        <div className='founders'>
            <img src={achievements2} className="achievements"></img>
            <h1 className='AboutUs-heading'>Runners Up at <span>EOGSEA, Mumbai 2023</span></h1>
        </div>
    </div>
)}

export default Achievements