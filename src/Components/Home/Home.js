import React, { Fragment, useState, useRef, useEffect} from 'react'
import './Home.css'

import home from '../../Assets/home.svg'
import flag from '../../Assets/flag.svg'
import whats1 from '../../Assets/whats1.png'
import whats2 from '../../Assets/whats2.png'
import whats3 from '../../Assets/whats3.png'
import fill_details from '../../Assets/fill_details.png'
import home_testi_1 from '../../Assets/home_testi_1.png'
import home_testi_2 from '../../Assets/home_testi_2.png'
import home_testi_1_mobile from '../../Assets/home_testi_1_mobile.png'
import home_testi_2_mobile from '../../Assets/home_testi_2_mobile.png'
import VideoOverlay from '../VideoOverlay/VideoOverlay'


function Home() {    

    const form = useRef(null);
    const portal = document.getElementById('portal-2')

    const options = [
        { value: 'teacher', label: 'Teacher' },
        { value: 'admin', label: 'School Admin' },
        { value: 'principal', label: 'Principal' },
        { value: 'owner', label: 'School Owner' }
    ];
     
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function handleOptionClick(option) {
        setSelectedOption(option);
        toggleDropdown();
    }


    const [vId,setVid] = useState({})
    const [zIndex, setZIndex] = useState(-1)
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

            <div className='Home' onClick={()=>{ if(isOpen){setIsOpen(false)}}}>

            <div className='Home-intro'>

                    <div className='Home-intro-left'>
                        <h1 className='Heading'>Your after school<br></br> <span>learning partner!</span></h1>
                        <p>Plug and Play with Schools - Easy SDK/API integration with School's Learning Management Systems.</p>
                        <button className='Button-with-arrow' onClick={() => form.current.scrollIntoView({ behavior: "smooth", block: 'center',inline: 'nearest'})}>
                                Get Started
                                <svg width="14" height="12" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8.10388H13.9545" stroke="white" stroke-width="1.85065" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.47754 1.62659L13.9548 8.10385L7.47754 14.5811" stroke="white" stroke-width="1.85065" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </button>
                    </div>
                    
                    <img src={home}></img>
                
            </div>

            <h1 className='Heading Heading-2'>What's <span>Next ?</span></h1>
            <div className="whats-next">
                <div>
                    <img src={whats1}></img>
                    <p>Book your free demo <br/> with us by just filling up<br/> a few details</p>
                </div>
                <svg className='left-svg-arrow' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5846 36.75L25.7263 33.7896L32.9742 26.5417H8.16797V22.4583H32.9742L25.7263 15.2104L28.5846 12.25L40.8346 24.5L28.5846 36.75Z" fill="#52ACFF"/>
                </svg>

                <svg className='down-svg-arrow' width="25" height="37" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.249999 29.5176L4.41875 25.4926L14.625 35.6988L14.625 0.767577L20.375 0.767577L20.375 35.6988L30.5812 25.4926L34.75 29.5176L17.5 46.7676L0.249999 29.5176Z" fill="#52ACFF"/>
                </svg>


                <div>
                    <img src={whats2}></img>
                    <p>Experience the product 40<br/> days for free, at 0<br/> integration cost.</p>
                </div>
                <svg className='left-svg-arrow' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5846 36.75L25.7263 33.7896L32.9742 26.5417H8.16797V22.4583H32.9742L25.7263 15.2104L28.5846 12.25L40.8346 24.5L28.5846 36.75Z" fill="#52ACFF"/>
                </svg>
                <svg className='down-svg-arrow' width="25" height="37" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.249999 29.5176L4.41875 25.4926L14.625 35.6988L14.625 0.767577L20.375 0.767577L20.375 35.6988L30.5812 25.4926L34.75 29.5176L17.5 46.7676L0.249999 29.5176Z" fill="#52ACFF"/>
                </svg>
                <div>
                    <img src={whats3}></img>
                    <p>Pay only if there's an<br/> increase in learning<br/> outcomes</p>
                </div>

                <button onClick={() => form.current.scrollIntoView({ behavior: "smooth", block: 'center',inline: 'nearest'})} >Book your free demo
                <svg width="22" height="22" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5846 36.75L25.7263 33.7896L32.9742 26.5417H8.16797V22.4583H32.9742L25.7263 15.2104L28.5846 12.25L40.8346 24.5L28.5846 36.75Z" fill="white"/>
                </svg>
                </button>
            </div>

            <h1 className='Heading Heading-2'>How will we <span>help</span> you?</h1>

            <div className='Help-section'>

                <div className='Floating-container --4--'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 14C9 11.5 9.875 9.375 11.625 7.625C13.375 5.875 15.5 5 18 5V7C16.05 7 14.396 7.679 13.038 9.037C11.6793 10.3957 11 12.05 11 14H9ZM13 14C13 12.6167 13.4877 11.4373 14.463 10.462C15.4377 9.48733 16.6167 9 18 9V11C17.1667 11 16.4583 11.2917 15.875 11.875C15.2917 12.4583 15 13.1667 15 14H13ZM5 6C4.45 6 3.979 5.804 3.587 5.412C3.19567 5.02067 3 4.55 3 4C3 3.45 3.19567 2.979 3.587 2.587C3.979 2.19567 4.45 2 5 2C5.55 2 6.02067 2.19567 6.412 2.587C6.804 2.979 7 3.45 7 4C7 4.55 6.804 5.02067 6.412 5.412C6.02067 5.804 5.55 6 5 6ZM2 11V8.5C2 8.08333 2.146 7.72933 2.438 7.438C2.72933 7.146 3.08333 7 3.5 7H6.5C7.25 7 7.896 6.76233 8.438 6.287C8.97933 5.81233 9.31667 5.21667 9.45 4.5H11.45C11.35 5.5 10.9833 6.38333 10.35 7.15C9.71667 7.91667 8.93333 8.45 8 8.75V11H2ZM19 17C18.45 17 17.979 16.8043 17.587 16.413C17.1957 16.021 17 15.55 17 15C17 14.45 17.1957 13.979 17.587 13.587C17.979 13.1957 18.45 13 19 13C19.55 13 20.021 13.1957 20.413 13.587C20.8043 13.979 21 14.45 21 15C21 15.55 20.8043 16.021 20.413 16.413C20.021 16.8043 19.55 17 19 17ZM16 22V19.75C15.0667 19.45 14.2833 18.9167 13.65 18.15C13.0167 17.3833 12.65 16.5 12.55 15.5H14.55C14.6833 16.2167 15.0207 16.8127 15.562 17.288C16.104 17.7627 16.75 18 17.5 18H20.5C20.9167 18 21.2707 18.146 21.562 18.438C21.854 18.7293 22 19.0833 22 19.5V22H16Z" fill="#52ACFF"/>
                        </svg>

                        <p>Connect with tutors instantly within 40 seconds.</p>
                </div>

                <div className='Help-container' style={{backgroundColor:"#F7F0E7"}}>

                    <div className='Floating-container --1'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 14C9 11.5 9.875 9.375 11.625 7.625C13.375 5.875 15.5 5 18 5V7C16.05 7 14.396 7.679 13.038 9.037C11.6793 10.3957 11 12.05 11 14H9ZM13 14C13 12.6167 13.4877 11.4373 14.463 10.462C15.4377 9.48733 16.6167 9 18 9V11C17.1667 11 16.4583 11.2917 15.875 11.875C15.2917 12.4583 15 13.1667 15 14H13ZM5 6C4.45 6 3.979 5.804 3.587 5.412C3.19567 5.02067 3 4.55 3 4C3 3.45 3.19567 2.979 3.587 2.587C3.979 2.19567 4.45 2 5 2C5.55 2 6.02067 2.19567 6.412 2.587C6.804 2.979 7 3.45 7 4C7 4.55 6.804 5.02067 6.412 5.412C6.02067 5.804 5.55 6 5 6ZM2 11V8.5C2 8.08333 2.146 7.72933 2.438 7.438C2.72933 7.146 3.08333 7 3.5 7H6.5C7.25 7 7.896 6.76233 8.438 6.287C8.97933 5.81233 9.31667 5.21667 9.45 4.5H11.45C11.35 5.5 10.9833 6.38333 10.35 7.15C9.71667 7.91667 8.93333 8.45 8 8.75V11H2ZM19 17C18.45 17 17.979 16.8043 17.587 16.413C17.1957 16.021 17 15.55 17 15C17 14.45 17.1957 13.979 17.587 13.587C17.979 13.1957 18.45 13 19 13C19.55 13 20.021 13.1957 20.413 13.587C20.8043 13.979 21 14.45 21 15C21 15.55 20.8043 16.021 20.413 16.413C20.021 16.8043 19.55 17 19 17ZM16 22V19.75C15.0667 19.45 14.2833 18.9167 13.65 18.15C13.0167 17.3833 12.65 16.5 12.55 15.5H14.55C14.6833 16.2167 15.0207 16.8127 15.562 17.288C16.104 17.7627 16.75 18 17.5 18H20.5C20.9167 18 21.2707 18.146 21.562 18.438C21.854 18.7293 22 19.0833 22 19.5V22H16Z" fill="#52ACFF"/>
                        </svg>

                        <p>Connect with tutors instantly within 40 seconds.</p>
                    </div>

                    <div className='circle-1'></div>
                    <div className='circle-2'></div>

                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.6973 22.373V24.6875H29.3828V22.373H31.6973ZM28.6113 14.6582H26.2969V13.8867C26.2969 12.659 26.7846 11.4816 27.6526 10.6136C28.5207 9.74547 29.6981 9.25778 30.9258 9.25778C32.1534 9.25778 33.3308 9.74547 34.1989 10.6136C35.067 11.4816 35.5547 12.659 35.5547 13.8867C35.5547 15.3834 34.7832 16.7875 33.5643 17.6052L33.1014 17.8984C32.2219 18.5156 31.6973 19.4568 31.6973 20.5215V20.83H29.3828V20.5215C29.3828 18.6853 30.3086 16.9726 31.8361 15.9697L32.2836 15.6765C32.8853 15.2754 33.2402 14.6119 33.2402 13.8867C33.2402 13.2729 32.9964 12.6842 32.5623 12.2501C32.1283 11.8161 31.5396 11.5722 30.9258 11.5722C30.3119 11.5722 29.7233 11.8161 29.2892 12.2501C28.8552 12.6842 28.6113 13.2729 28.6113 13.8867V14.6582ZM13.9531 20.0586C18.0729 20.0586 26.2969 22.1261 26.2969 26.2304V30.8593H1.60938V26.2304C1.60938 22.1261 9.8334 20.0586 13.9531 20.0586ZM13.9531 6.17184C15.59 6.17184 17.1598 6.82209 18.3173 7.97954C19.4748 9.137 20.125 10.7068 20.125 12.3437C20.125 13.9806 19.4748 15.5504 18.3173 16.7079C17.1598 17.8653 15.59 18.5156 13.9531 18.5156C12.3162 18.5156 10.7464 17.8653 9.58895 16.7079C8.4315 15.5504 7.78125 13.9806 7.78125 12.3437C7.78125 10.7068 8.4315 9.137 9.58895 7.97954C10.7464 6.82209 12.3162 6.17184 13.9531 6.17184ZM13.9531 22.9902C9.37051 22.9902 4.54102 25.2429 4.54102 26.2304V27.9277H23.3652V26.2304C23.3652 25.2429 18.5357 22.9902 13.9531 22.9902ZM13.9531 9.10349C13.0938 9.10349 12.2696 9.44487 11.6619 10.0525C11.0543 10.6602 10.7129 11.4844 10.7129 12.3437C10.7129 13.2031 11.0543 14.0273 11.6619 14.6349C12.2696 15.2426 13.0938 15.584 13.9531 15.584C14.8125 15.584 15.6367 15.2426 16.2443 14.6349C16.852 14.0273 17.1934 13.2031 17.1934 12.3437C17.1934 11.4844 16.852 10.6602 16.2443 10.0525C15.6367 9.44487 14.8125 9.10349 13.9531 9.10349Z" fill="#C29C6D"/>
                    </svg>
                    <h2>After school learning<br></br> and real time doubt<br></br> solving</h2>
                    <p className='Help-container-para'>24/7 real time video based learning and doubt solving</p>
                
                </div>

                <div className='Floating-container --1--'>
                <svg width="22" height="22" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.2197 5.86334H4.83496C4.05744 5.86334 3.31177 6.17221 2.76198 6.722C2.21219 7.27179 1.90332 8.01746 1.90332 8.79498V27.8506C1.90332 28.6282 2.21219 29.3738 2.76198 29.9236C3.31177 30.4734 4.05744 30.7823 4.83496 30.7823H31.2197C31.9972 30.7823 32.7429 30.4734 33.2927 29.9236C33.8425 29.3738 34.1514 28.6282 34.1514 27.8506V8.79498C34.1514 8.01746 33.8425 7.27179 33.2927 6.722C32.7429 6.17221 31.9972 5.86334 31.2197 5.86334ZM4.83496 27.8506V8.79498H16.5615V27.8506H4.83496ZM31.2197 27.8506H19.4932V8.79498H31.2197V27.8506ZM20.959 13.9254H29.7539V16.1241H20.959V13.9254ZM20.959 17.5899H29.7539V19.7886H20.959V17.5899ZM20.959 21.2545H29.7539V23.4532H20.959V21.2545Z" fill="#52ACFF"/>
                        </svg>
                        <p>150000+ hours of content.</p>
                </div>

                <div className='Help-container Tdown' style={{backgroundColor:"#EFE4FC"}}>

                    <div className='Floating-container --6'>
                        <svg width="22" height="22" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.2197 5.86334H4.83496C4.05744 5.86334 3.31177 6.17221 2.76198 6.722C2.21219 7.27179 1.90332 8.01746 1.90332 8.79498V27.8506C1.90332 28.6282 2.21219 29.3738 2.76198 29.9236C3.31177 30.4734 4.05744 30.7823 4.83496 30.7823H31.2197C31.9972 30.7823 32.7429 30.4734 33.2927 29.9236C33.8425 29.3738 34.1514 28.6282 34.1514 27.8506V8.79498C34.1514 8.01746 33.8425 7.27179 33.2927 6.722C32.7429 6.17221 31.9972 5.86334 31.2197 5.86334ZM4.83496 27.8506V8.79498H16.5615V27.8506H4.83496ZM31.2197 27.8506H19.4932V8.79498H31.2197V27.8506ZM20.959 13.9254H29.7539V16.1241H20.959V13.9254ZM20.959 17.5899H29.7539V19.7886H20.959V17.5899ZM20.959 21.2545H29.7539V23.4532H20.959V21.2545Z" fill="#52ACFF"/>
                        </svg>
                        <p>150000+ hours of content.</p>
                    </div>

                    <div className='circle-9'></div>                    
                    <div className='circle-10'></div>                    
                    <div className='circle-11'></div>                    
                    <div className='circle-12'></div>                    

                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.2197 5.86334H4.83496C4.05744 5.86334 3.31177 6.17221 2.76198 6.722C2.21219 7.27179 1.90332 8.01746 1.90332 8.79498V27.8506C1.90332 28.6282 2.21219 29.3738 2.76198 29.9236C3.31177 30.4734 4.05744 30.7823 4.83496 30.7823H31.2197C31.9972 30.7823 32.7429 30.4734 33.2927 29.9236C33.8425 29.3738 34.1514 28.6282 34.1514 27.8506V8.79498C34.1514 8.01746 33.8425 7.27179 33.2927 6.722C32.7429 6.17221 31.9972 5.86334 31.2197 5.86334ZM4.83496 27.8506V8.79498H16.5615V27.8506H4.83496ZM31.2197 27.8506H19.4932V8.79498H31.2197V27.8506ZM20.959 13.9254H29.7539V16.1241H20.959V13.9254ZM20.959 17.5899H29.7539V19.7886H20.959V17.5899ZM20.959 21.2545H29.7539V23.4532H20.959V21.2545Z" fill="#8B62B6"/>
                    </svg>
                    <h2>Digital Library</h2>
                    <p className='Help-container-para'>We have over 150,000 + minutes of content on the platform which students can watch and learn better</p>
                </div>
                
                <div className='Floating-container --5--'>
                <svg g width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0234375 20L20.0234 0V11H18.0234V4.85L4.87344 18H11.1734V20H0.0234375ZM17.0234 23L16.7234 21.5C16.5234 21.4167 16.3361 21.3293 16.1614 21.238C15.9861 21.146 15.8068 21.0333 15.6234 20.9L14.1734 21.35L13.1734 19.65L14.3234 18.65C14.2901 18.45 14.2734 18.2333 14.2734 18C14.2734 17.7667 14.2901 17.55 14.3234 17.35L13.1734 16.35L14.1734 14.65L15.6234 15.1C15.8068 14.9667 15.9861 14.854 16.1614 14.762C16.3361 14.6707 16.5234 14.5833 16.7234 14.5L17.0234 13H19.0234L19.3234 14.5C19.5234 14.5833 19.7111 14.6707 19.8864 14.762C20.0611 14.854 20.2401 14.9667 20.4234 15.1L21.8734 14.65L22.8734 16.35L21.7234 17.35C21.7568 17.55 21.7734 17.7667 21.7734 18C21.7734 18.2333 21.7568 18.45 21.7234 18.65L22.8734 19.65L21.8734 21.35L20.4234 20.9C20.2401 21.0333 20.0611 21.146 19.8864 21.238C19.7111 21.3293 19.5234 21.4167 19.3234 21.5L19.0234 23H17.0234ZM18.0234 20C18.5734 20 19.0444 19.8043 19.4364 19.413C19.8278 19.021 20.0234 18.55 20.0234 18C20.0234 17.45 19.8278 16.979 19.4364 16.587C19.0444 16.1957 18.5734 16 18.0234 16C17.4734 16 17.0028 16.1957 16.6114 16.587C16.2194 16.979 16.0234 17.45 16.0234 18C16.0234 18.55 16.2194 19.021 16.6114 19.413C17.0028 19.8043 17.4734 20 18.0234 20Z" fill="#52ACFF"/>
                        </svg>
                        <p>Make data driven decisions for your students.</p>
                </div>

                <div className='Help-container' style={{backgroundColor:"#E7F0F0"}}>
                    
                    <div className='Floating-container --1'>
                        <svg g width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0234375 20L20.0234 0V11H18.0234V4.85L4.87344 18H11.1734V20H0.0234375ZM17.0234 23L16.7234 21.5C16.5234 21.4167 16.3361 21.3293 16.1614 21.238C15.9861 21.146 15.8068 21.0333 15.6234 20.9L14.1734 21.35L13.1734 19.65L14.3234 18.65C14.2901 18.45 14.2734 18.2333 14.2734 18C14.2734 17.7667 14.2901 17.55 14.3234 17.35L13.1734 16.35L14.1734 14.65L15.6234 15.1C15.8068 14.9667 15.9861 14.854 16.1614 14.762C16.3361 14.6707 16.5234 14.5833 16.7234 14.5L17.0234 13H19.0234L19.3234 14.5C19.5234 14.5833 19.7111 14.6707 19.8864 14.762C20.0611 14.854 20.2401 14.9667 20.4234 15.1L21.8734 14.65L22.8734 16.35L21.7234 17.35C21.7568 17.55 21.7734 17.7667 21.7734 18C21.7734 18.2333 21.7568 18.45 21.7234 18.65L22.8734 19.65L21.8734 21.35L20.4234 20.9C20.2401 21.0333 20.0611 21.146 19.8864 21.238C19.7111 21.3293 19.5234 21.4167 19.3234 21.5L19.0234 23H17.0234ZM18.0234 20C18.5734 20 19.0444 19.8043 19.4364 19.413C19.8278 19.021 20.0234 18.55 20.0234 18C20.0234 17.45 19.8278 16.979 19.4364 16.587C19.0444 16.1957 18.5734 16 18.0234 16C17.4734 16 17.0028 16.1957 16.6114 16.587C16.2194 16.979 16.0234 17.45 16.0234 18C16.0234 18.55 16.2194 19.021 16.6114 19.413C17.0028 19.8043 17.4734 20 18.0234 20Z" fill="#52ACFF"/>
                        </svg>
                        <p>Make data driven decisions for your students.</p>
                    </div>

                    <div className='circle-3'></div>

                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.582 6.17194C25.2189 6.17194 26.7888 6.82219 27.9462 7.97964C29.1037 9.13709 29.7539 10.7069 29.7539 12.3438C29.7539 13.9807 29.1037 15.5505 27.9462 16.708C26.7888 17.8654 25.2189 18.5157 23.582 18.5157C21.9451 18.5157 20.3753 17.8654 19.2179 16.708C18.0604 15.5505 17.4102 13.9807 17.4102 12.3438C17.4102 10.7069 18.0604 9.13709 19.2179 7.97964C20.3753 6.82219 21.9451 6.17194 23.582 6.17194ZM23.582 9.10358C22.7227 9.10358 21.8985 9.44496 21.2908 10.0526C20.6832 10.6603 20.3418 11.4844 20.3418 12.3438C20.3418 13.2032 20.6832 14.0273 21.2908 14.635C21.8985 15.2427 22.7227 15.584 23.582 15.584C24.4414 15.584 25.2656 15.2427 25.8732 14.635C26.4809 14.0273 26.8223 13.2032 26.8223 12.3438C26.8223 11.4844 26.4809 10.6603 25.8732 10.0526C25.2656 9.44496 24.4414 9.10358 23.582 9.10358ZM23.582 20.0587C27.7018 20.0587 35.9258 22.1108 35.9258 26.2305V30.8594H11.2383V26.2305C11.2383 22.1108 19.4623 20.0587 23.582 20.0587ZM23.582 22.9903C18.9531 22.9903 14.1699 25.243 14.1699 26.2305V27.9278H32.9941V26.2305C32.9941 25.243 28.1646 22.9903 23.582 22.9903ZM8.15234 20.4907L4.29492 22.7897L5.34414 18.454L1.98047 15.5532L6.40879 15.1674L8.15234 11.094L9.86504 15.1674L14.3242 15.5532L10.9297 18.454L11.9326 22.7897L8.15234 20.4907Z" fill="#52ACFF"/>
                    </svg>
                    <h2>Data Powered Solutions</h2>
                    <p className='Help-container-para'>We use deep data and track every student's progress to give you the best decision making ability</p>
                </div>

                <div className='Floating-container --6--'>
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0L0 6L4 8.18V14.18L11 18L18 14.18V8.18L20 7.09V14H22V6L11 0ZM17.82 6L11 9.72L4.18 6L11 2.28L17.82 6ZM16 12.99L11 15.72L6 12.99V9.27L11 12L16 9.27V12.99Z" fill="#52ACFF"/>
                    </svg>
                    <p>Career and academic guidance from top experts.</p>
                </div>

                <div className='Help-container Tdown' style={{backgroundColor:"#FBE8EC"}}>

                    <div className='Floating-container --8'>
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0L0 6L4 8.18V14.18L11 18L18 14.18V8.18L20 7.09V14H22V6L11 0ZM17.82 6L11 9.72L4.18 6L11 2.28L17.82 6ZM16 12.99L11 15.72L6 12.99V9.27L11 12L16 9.27V12.99Z" fill="#52ACFF"/>
                        </svg>
                        <p>Career and academic guidance from top experts.</p>
                    </div>

                    <div className='circle-8'></div>

                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.8164 13.5781V3.70312H9.94141V11.1094H2.53516V25.9219H27.2227V13.5781H19.8164ZM12.4102 6.17188H17.3477V23.4531H12.4102V6.17188ZM5.00391 13.5781H9.94141V23.4531H5.00391V13.5781ZM24.7539 23.4531H19.8164V16.0469H24.7539V23.4531Z" fill="#DA5E74"/>
                    </svg>
                    <h2>Mentorship sessions with industry leaders</h2>
                    <p className='Help-container-para'>Weekly mentorship sessions with top corporate leaders, government officials and executives to motivate students</p>
                </div>

                <div className='Floating-container --8--'>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2162 15.8948V14.2876C14.2162 13.4351 13.8775 12.6175 13.2747 12.0147C12.6719 11.4118 11.8543 11.0732 11.0017 11.0732H4.57284C3.72032 11.0732 2.90271 11.4118 2.29989 12.0147C1.69706 12.6175 1.3584 13.4351 1.3584 14.2876V15.8948" stroke="#52ACFF" stroke-width="1.60722" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.78769 7.85864C9.56297 7.85864 11.0021 6.41948 11.0021 4.64419C11.0021 2.8689 9.56297 1.42975 7.78769 1.42975C6.0124 1.42975 4.57324 2.8689 4.57324 4.64419C4.57324 6.41948 6.0124 7.85864 7.78769 7.85864Z" stroke="#52ACFF" stroke-width="1.60722" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Doubts solved by India's top tutors.</p>
                </div>

                <div className='Help-container' style={{backgroundColor:"#DFF6D7"}}>

                    <div className='Floating-container --2'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2162 15.8948V14.2876C14.2162 13.4351 13.8775 12.6175 13.2747 12.0147C12.6719 11.4118 11.8543 11.0732 11.0017 11.0732H4.57284C3.72032 11.0732 2.90271 11.4118 2.29989 12.0147C1.69706 12.6175 1.3584 13.4351 1.3584 14.2876V15.8948" stroke="#52ACFF" stroke-width="1.60722" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.78769 7.85864C9.56297 7.85864 11.0021 6.41948 11.0021 4.64419C11.0021 2.8689 9.56297 1.42975 7.78769 1.42975C6.0124 1.42975 4.57324 2.8689 4.57324 4.64419C4.57324 6.41948 6.0124 7.85864 7.78769 7.85864Z" stroke="#52ACFF" stroke-width="1.60722" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Doubts solved by India's top tutors.</p>
                    </div>

                    <div className='circle-4'></div>
                    <div className='circle-5'></div>
                    <div className='circle-6'></div>

                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1934 4.28174C20.3476 4.28174 22.9023 6.83651 22.9023 9.99072C22.9023 13.1449 20.3476 15.6997 17.1934 15.6997C14.0391 15.6997 11.4844 13.1449 11.4844 9.99072C11.4844 6.83651 14.0391 4.28174 17.1934 4.28174ZM22.9023 19.3249C22.9023 20.8378 22.5027 24.3631 19.7767 28.3023L18.6206 21.4087L19.9622 18.7255C19.0773 18.6256 18.1496 18.5542 17.1934 18.5542C16.2371 18.5542 15.3094 18.6256 14.4245 18.7255L15.7661 21.4087L14.61 28.3023C11.884 24.3631 11.4844 20.8378 11.4844 19.3249C8.07326 20.324 5.77539 22.1223 5.77539 24.2632V29.9722H28.6113V24.2632C28.6113 22.1223 26.3277 20.324 22.9023 19.3249Z" fill="#4DAC2B"/>
                    </svg>
                    <h2>Quality educators with 10+ years of experience</h2>
                    <p className='Help-container-para'>Educators with 10+ years of experience, top rating on the platform and ability to teach all kinds of students</p>
                </div>

                <div className='Floating-container --22--'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.07 2.93L15.66 4.34C17.1586 5.84245 18.0001 7.87793 18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.92 5.05 2.56 9 2.07V4.09C6.16 4.57 4 7.03 4 10C4 13.31 6.69 16 10 16C13.31 16 16 13.31 16 10C16 8.34 15.33 6.84 14.24 5.76L12.83 7.17C13.55 7.9 14 8.9 14 10C14 12.21 12.21 14 10 14C7.79 14 6 12.21 6 10C6 8.14 7.28 6.59 9 6.14V8.28C8.4 8.63 8 9.26 8 10C8 11.1 8.9 12 10 12C11.1 12 12 11.1 12 10C12 9.26 11.6 8.62 11 8.28V0H10C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 7.24 18.88 4.74 17.07 2.93Z" fill="#52ACFF"/>
                    </svg>
                    <p>Track your students learning outcomes.</p>
                </div>

                <div className='Help-container Tdown' style={{backgroundColor:"#FFEDD8"}}>

                    <div className='Floating-container --7'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.07 2.93L15.66 4.34C17.1586 5.84245 18.0001 7.87793 18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.92 5.05 2.56 9 2.07V4.09C6.16 4.57 4 7.03 4 10C4 13.31 6.69 16 10 16C13.31 16 16 13.31 16 10C16 8.34 15.33 6.84 14.24 5.76L12.83 7.17C13.55 7.9 14 8.9 14 10C14 12.21 12.21 14 10 14C7.79 14 6 12.21 6 10C6 8.14 7.28 6.59 9 6.14V8.28C8.4 8.63 8 9.26 8 10C8 11.1 8.9 12 10 12C11.1 12 12 11.1 12 10C12 9.26 11.6 8.62 11 8.28V0H10C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 7.24 18.88 4.74 17.07 2.93Z" fill="#52ACFF"/>
                        </svg>
                        <p>Track your students learning outcomes.</p>
                    </div>

                    <div className='circle-7'></div>

                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_5353_1122)">
                        <path d="M17.252 10.1546C17.252 9.94739 17.3342 9.74871 17.4807 9.60222C17.6272 9.45573 17.8259 9.37343 18.0331 9.37343H19.5953C19.8025 9.37343 20.0012 9.45573 20.1477 9.60222C20.2942 9.74871 20.3765 9.94739 20.3765 10.1546V11.7168C20.3765 11.924 20.2942 12.1227 20.1477 12.2692C20.0012 12.4156 19.8025 12.4979 19.5953 12.4979H18.0331C17.8259 12.4979 17.6272 12.4156 17.4807 12.2692C17.3342 12.1227 17.252 11.924 17.252 11.7168V10.1546ZM12.5652 10.1546C12.5652 9.94739 12.6475 9.74871 12.794 9.60222C12.9405 9.45573 13.1391 9.37343 13.3463 9.37343H14.9086C15.1157 9.37343 15.3144 9.45573 15.4609 9.60222C15.6074 9.74871 15.6897 9.94739 15.6897 10.1546V11.7168C15.6897 11.924 15.6074 12.1227 15.4609 12.2692C15.3144 12.4156 15.1157 12.4979 14.9086 12.4979H13.3463C13.1391 12.4979 12.9405 12.4156 12.794 12.2692C12.6475 12.1227 12.5652 11.924 12.5652 11.7168V10.1546ZM4.75391 14.8413C4.75391 14.6342 4.8362 14.4355 4.98269 14.289C5.12918 14.1425 5.32787 14.0602 5.53503 14.0602H7.09729C7.30446 14.0602 7.50314 14.1425 7.64963 14.289C7.79612 14.4355 7.87842 14.6342 7.87842 14.8413V16.4036C7.87842 16.6107 7.79612 16.8094 7.64963 16.9559C7.50314 17.1024 7.30446 17.1847 7.09729 17.1847H5.53503C5.32787 17.1847 5.12918 17.1024 4.98269 16.9559C4.8362 16.8094 4.75391 16.6107 4.75391 16.4036V14.8413ZM9.44067 14.8413C9.44067 14.6342 9.52297 14.4355 9.66946 14.289C9.81595 14.1425 10.0146 14.0602 10.2218 14.0602H11.7841C11.9912 14.0602 12.1899 14.1425 12.3364 14.289C12.4829 14.4355 12.5652 14.6342 12.5652 14.8413V16.4036C12.5652 16.6107 12.4829 16.8094 12.3364 16.9559C12.1899 17.1024 11.9912 17.1847 11.7841 17.1847H10.2218C10.0146 17.1847 9.81595 17.1024 9.66946 16.9559C9.52297 16.8094 9.44067 16.6107 9.44067 16.4036V14.8413Z" fill="#EA9022"/>
                        <path d="M5.5343 0C5.74147 0 5.94015 0.0822972 6.08664 0.228787C6.23313 0.375277 6.31543 0.57396 6.31543 0.781128V1.56226H18.8135V0.781128C18.8135 0.57396 18.8958 0.375277 19.0423 0.228787C19.1888 0.0822972 19.3874 0 19.5946 0C19.8018 0 20.0005 0.0822972 20.1469 0.228787C20.2934 0.375277 20.3757 0.57396 20.3757 0.781128V1.56226H21.938C22.7667 1.56226 23.5614 1.89144 24.1474 2.4774C24.7333 3.06336 25.0625 3.8581 25.0625 4.68677V21.8716C25.0625 22.7003 24.7333 23.495 24.1474 24.0809C23.5614 24.6669 22.7667 24.9961 21.938 24.9961H3.19092C2.36225 24.9961 1.56751 24.6669 0.981555 24.0809C0.395595 23.495 0.0664063 22.7003 0.0664062 21.8716V4.68677C0.0664063 3.8581 0.395595 3.06336 0.981555 2.4774C1.56751 1.89144 2.36225 1.56226 3.19092 1.56226H4.75317V0.781128C4.75317 0.57396 4.83547 0.375277 4.98196 0.228787C5.12845 0.0822972 5.32713 0 5.5343 0V0ZM1.62866 6.24902V21.8716C1.62866 22.2859 1.79326 22.6833 2.08624 22.9763C2.37922 23.2692 2.77658 23.4338 3.19092 23.4338H21.938C22.3523 23.4338 22.7497 23.2692 23.0427 22.9763C23.3356 22.6833 23.5002 22.2859 23.5002 21.8716V6.24902H1.62866Z" fill="#EA9022"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_5353_1122">
                        <rect width="24.9961" height="24.9961" fill="white" transform="translate(0.0664062)"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <h2>Weekly curated<br></br> assessments by top<br></br> subject matter experts</h2>
                    <p className='Help-container-para'>Weekly assessments on the platform to track every student's progress and award flags</p>

                </div>
                
                <button onClick={() => form.current.scrollIntoView({ behavior: "smooth", block: 'center',inline: 'nearest'})}>Learn More
                <svg width="22" height="22" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5846 36.75L25.7263 33.7896L32.9742 26.5417H8.16797V22.4583H32.9742L25.7263 15.2104L28.5846 12.25L40.8346 24.5L28.5846 36.75Z" fill="white"/>
                </svg>
                </button>
                
            </div>


            <h1 className='Heading Heading-2'>Our <span>Impact</span> & <span>Metrics</span></h1>
            
            <div className='Metrics'>
                <div>
                    <h1>20000+</h1>
                    <p>Users have used the platform to solve their doubts since the launch</p>
                </div>
                <div>
                    <h1>4.8/5</h1>
                    <p>The avg rating given to every session by a student</p>
                </div>
                <div>
                    <h1>100,000</h1>
                    <p>minutes of learning conducted with over <span style={{color:"black",fontWeight:"600"}}>60,000</span> doubts solved</p>
                </div>
            </div>
            

            <h1 className='Heading Heading-2'>Our <span>Testimonials</span></h1>
            
            <div className='testimonials'>
                <div className='testimonial'>
                    <div className='testimonial-comment'>
                        <span className='quote'>&ldquo;</span>
                        <p className='testimonial-big'>
                        I was able to get my doubt solved within minutes. The interface was student friendly and easy to navigate. Tutor assigned to me was very good. I could understand the solution clearly and easily.
                        </p>
                        <p className='testimonial-small'>
                        I was able to get my doubt solved within minutes. The interface was student friendly and easy to navigate. Tutor assigned to me was very good. I could understand the solution clearly and easily.
                        </p>
                        <h4 className='testimonial-big'>Sushanth K</h4>
                        <h5 className='testimonial-big'>9th Std Student</h5>
                        
                        <h4 className='testimonial-small'>Sushanth K</h4>
                        <h5 className='testimonial-small'>9th Std Student</h5>                        
                    </div>
                    <div className='testimonial-img-container'>
                        <img className='testimonial-big' src={home_testi_1}></img>
                        <img className='testimonial-small' src={home_testi_1_mobile}></img>
                        <button className='play-button' onClick={()=>handleDisplayVideoOverlay("G-Wbqx7sQgQ")}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="17.905" cy="17.9045" rx="17.905" ry="17.9045" fill="white" fill-opacity="0.88"/>
                                <path d="M24.572 17.2454C25.1338 17.5697 25.1338 18.3804 24.572 18.7047L15.0929 24.1774C14.5312 24.5017 13.8291 24.0963 13.8291 23.4477L13.8291 12.5024C13.8291 11.8538 14.5312 11.4484 15.0929 11.7727L24.572 17.2454Z" fill="#52ACFF"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='testimonial'>
                    <div className='testimonial-img-container'>
                        <img className='testimonial-big' src={home_testi_2}></img>
                        <img className='testimonial-small' src={home_testi_2_mobile}></img>
                        <button className='play-button' onClick={()=>handleDisplayVideoOverlay("ao2KAF16Crk")}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="17.905" cy="17.9045" rx="17.905" ry="17.9045" fill="white" fill-opacity="0.88"/>
                                <path d="M24.572 17.2454C25.1338 17.5697 25.1338 18.3804 24.572 18.7047L15.0929 24.1774C14.5312 24.5017 13.8291 24.0963 13.8291 23.4477L13.8291 12.5024C13.8291 11.8538 14.5312 11.4484 15.0929 11.7727L24.572 17.2454Z" fill="#52ACFF"/>
                            </svg>
                        </button>
                    </div>
                    <div className='testimonial-comment'>
                        <span className='quote'>&ldquo;</span>
                        <p className='testimonial-big'>
                        It was fantastic! My session was just awesome. All my doubts were resolved by the tutor's excellent explanation of the concept.
                        </p>
                        <p className='testimonial-small'>
                        It was fantastic! My session was just awesome. All my doubts were resolved by the tutor's excellent explanation of the concept.
                        </p>
                        <h4 className='testimonial-big'>Isha Dhanaji Sawant</h4>
                        <h4 className='testimonial-small'>Isha Dhanaji Sawant</h4>
                        <h5>10th Std Student</h5>
                    </div>
                </div>
            </div>

            <h1 className='Heading Heading-2 heading-big'>Learning aid for <span>students</span>, teaching aid for <span>teachers</span> & tracking aid for <span>schools</span></h1>

            <div  ref={form}  className='fill-details'>
                <div className='fill-details-left'>
                    <h3>Let us help you get <span>better learning</span> outcomes for your <span>School!</span></h3>
                    <div className='fill-input-container'>
                        <input placeholder='Enter your Full Name'></input>
                    </div>
                    <div className='fill-input-container'>
                        <input placeholder='Enter your School Name'></input>
                    </div>
                    <div className='fill-input-container'>
                        <div>
                            <img src={flag}></img>
                            <p>+91</p>
                        </div>
                        <input placeholder='Enter your Number'></input>
                    </div>
                    <div className='fill-input-container'>
                        <input placeholder='Enter your Email ID'></input>
                    </div>

                    <div className="dropdown-header" onClick={toggleDropdown}>
                        {selectedOption ? selectedOption.label : 'Select Role'}
                        <span className="arrow-icon">&#9662;</span>
                        {isOpen && (
                            <ul>
                            {options.map(option => (
                                <li
                                key={option.value}
                                onClick={() => handleOptionClick(option)}
                                >
                                {option.label}
                                </li>
                            ))}
                            </ul>
                        )}
                    </div>
                    <button>Get Started</button>
                </div>
                <img src={fill_details}></img>
            </div>
        </div>
    </Fragment>
    )
}

export default Home
