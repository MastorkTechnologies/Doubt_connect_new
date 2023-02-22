import React from 'react'
import Slider from './Slider'
import './ForTutors.css'
import fortutors from '../../Assets/fortutors.png'
import perk1 from '../../Assets/perk1.svg'
import perk2 from '../../Assets/perk2.svg'
import perk3 from '../../Assets/perk3.svg'
import perk4 from '../../Assets/perk4.svg'
import perk5 from '../../Assets/perk5.svg'
import perk6 from '../../Assets/perk6.svg'
    


function ForTutors() {
    return (
        <div className='For-tutors'>
            
            <div className='For-tutors-how'>
                <div className='For-tutors-how-left'>
                    <div>
                        <h1 className='For-tutors-heading'>How to become a tutor<br></br><span>at DoubtConnect?</span></h1>
                    </div>
                    <p>Becoming a tutor at DoubtConnect means you believe in our vision of democratizing education amongst the masses</p>

                    <button className='Button-with-arrow'>
                    <div>
                        Apply Now  
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.10388H13.9545" stroke="white" stroke-width="1.85065" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.47656 1.62659L13.9538 8.10385L7.47656 14.5811" stroke="white" stroke-width="1.85065" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    </button>
                </div>
                <div className='For-tutors-how-right'>
                    <img src={fortutors}></img>
                </div>
            </div>

            <h1 className='For-tutors-heading'>Follow the <span>steps</span> below!</h1>


            <div className='For-tutor-steps'>
                
                <div className='For-tutor-step' style={{backgroundColor:"#F7F0E7"}}>
                    <div>
                        <h3 style={{color:"#C29C6D"}} >STEP 01</h3>
                        <h2>Apply</h2>
                        <p>To register,fill the form by clicking apply now.</p>
                    </div>
                    <div className='circle c--1'></div>
                    <div className='circle c--2'></div>
                </div>

                <div className='For-tutor-step Tdown' style={{backgroundColor:"#EFE4FC"}}>
                    <div>
                        <h3 style={{color:"#8B62B6"}}>STEP 02</h3>
                        <h2>Online Screening</h2>
                        <p>Thoroughly revise your subject of expertise for an online assessment that shall be conducted based on the information we receive through the above forms.</p>
                    </div>
                    <div className='circle c--3'></div>
                    <div className='circle c--5'></div>
                </div>

                <div className='For-tutor-step' style={{backgroundColor:"#E7F0F0"}}>
                    <div>
                        <h3 style={{color:"#52ACFF"}}>STEP 03</h3>
                        <h2>Interview</h2>
                        <p>On clearing the assessments you'll be required to appear for a video interview, where the further proceedings will be discussed.</p>
                    </div>
                    <div className='circle c--6'></div>
                </div>

                <div className='For-tutor-step Tdown' style={{backgroundColor:"#FBE8EC"}}>
                    <div>
                        <h3 style={{color:"#DA5E74"}}>STEP 04</h3>
                        <h2>Verification</h2>
                        <p>Once you clear the Interview, our team will verify your documents. List of documents will be shared by the team via email.</p>
                    </div>
                    <div className='circle c--7'></div>
                </div>

                <div className='For-tutor-step' style={{backgroundColor:"#DFF6D7"}}>
                    <div>
                        <h3 style={{color:"#4DAC2B"}}>STEP 05</h3>
                        <h2>Onboarding</h2>
                        <p>Once you clear the entire evaluation process, our team will work with you to ensure a smooth onboarding process so you can start your DoubtConnect journey.</p>
                    </div>
                    <div className='circle c--10'></div>
                </div>

                <div className='For-tutor-step Tdown' style={{backgroundColor:"#FFEDD8"}}>
                    <div>
                        <h3 style={{color:"#EA9022"}}>STEP 06</h3>
                        <h2>Start answering</h2>
                        <p>Congratulations you are a DoubtConnector!</p>
                    </div>
                    <div className='circle c--4'></div>
                    <div className='circle c--8'></div>
                </div>

                
                <div className='circle c--9'></div>
                <div className='circle c--11'></div>

            </div>


            <button className='Apply-now'>
                Learn More 
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8.10388H13.9545" stroke="white" stroke-width="1.85065" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.47656 1.62659L13.9538 8.10385L7.47656 14.5811" stroke="white" stroke-width="1.85065" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>


            <div className='For-Tutor-perks'>
                
                <h1 className='For-tutors-heading'>What we offer to our <span>tutors?</span></h1>

                <div className='Tutor-perks'>
                    <div className='Tutor-perk'>
                        <img src={perk1}></img>
                        <h2>Choose Your Comfort</h2>
                        <p>Choose a place of your convenience - whether at home or at an office space, it's all up to you! All you need is just some basic teaching equipment to teach on our platform.</p>
                    </div>
                    <div className='Tutor-perk'>
                        <img src={perk2}></img>
                        <h2>Competitive Payout Model</h2>
                        <p>We highly value your skills and constantly monitor industry benchmarks to develop a competitive pay-out model, because pay-checks have gotta be right!</p>
                    </div>
                    <div className='Tutor-perk'>
                        <img src={perk3}></img>
                        <h2>Build Your Fanbase</h2>
                        <p>Teach in your preferred style and become the student's favourite tutor for your teaching style and technique. Get rewarded for superior performance.</p>
                    </div>
                    <div className='Tutor-perk'>
                        <img src={perk4}></img>
                        <h2>Pick Your Timings</h2>
                        <p>Whether full-time or part-time, on DoubtConnect's platform, you can teach at your convenience. No fixed timings. Simply come online whenever you can!</p>
                    </div>
                    <div className='Tutor-perk'>
                        <img src={perk5}></img>
                        <h2>Easy Settlement</h2>
                        <p>Through our automated process and in-app dashboard plan, manage and keep track of your earnings and get automatically paid every month. As simple as that!</p>
                    </div>
                    <div className='Tutor-perk'>
                        <img src={perk6}></img>
                        <h2>Student-preneur</h2>
                        <p>If you are a student who is confident of solving doubts of other students, we have the perfect platform for you. You will be rewarded well for your talent.</p>
                    </div>
                </div>

            </div>
            <Slider/>

        </div>
    )
}

export default ForTutors