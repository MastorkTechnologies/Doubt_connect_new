import React from 'react'
import './AboutUs.css'
import about1 from '../../Assets/about1.png'
import about2 from '../../Assets/aboutus2.png'
import about3 from '../../Assets/aboutus3.png'
import about4 from '../../Assets/aboutus4.png'

function AboutUs() {
  return (
    <div className='AboutUs'>
        
        <div className='AboutUs-container AboutUs-container-1'>
                <img src={about1}></img>
                <div>
                    <h1 className='AboutUs-heading'>We Are  <span>DoubtConnect!</span></h1>
                    <p>Built by Students For Students</p>
                </div>
        </div>

        <div className='AboutUs-container'>
            <div>
                <h1 className='AboutUs-heading'>Our <span>Story</span></h1>
                <p>We’re a team of 18 “DoubtConnectors” from Manipal, IIT Kharagpur, Mumbai University and Bennett University who are completely paranoid about building this "next level" product. DoubtConnect was founded in August 2020, by 3 friends with the vision to solve a huge problem faced by millions across the globe, since then there’s been no looking back. We’ve had extremely talented individuals joining us across multiple portfolios comprising tech, marketing, operations, design and our very own AI and ML. We envision DoubtConnect to be an extension of a student’s friend and we’re very proud of doing so because the idea of revolutionizing the most important thing in the 21st century i.e. Education is “limitless”.</p>
            </div>
            <img src={about2}></img>
        </div>

        <div className='AboutUs-container'>
                <img src={about3}></img>
                <div>
                    <h1 className='AboutUs-heading'>Our  <span>Mission</span></h1>
                    <p>To build a platform that closes gaps in education and enables students and schools to unleash their potential through technology and data</p>
                </div>
        </div>

        <div className='AboutUs-container'>
            <div>
                <h1 className='AboutUs-heading'>Our <span>Vision</span></h1>
                <p>Enabling A Generation Go Upwards In Their Learning Curve</p>
            </div>
            <img src={about4}></img>
        </div>

    </div>
  )
}

export default AboutUs