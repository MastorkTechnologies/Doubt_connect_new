import React,{useEffect} from 'react'
import './ForStudents.css'
import how1 from '../Assets/how1.png'
import how2 from '../Assets/how2.png'
import how3 from '../Assets/how3.png'
import mobile from '../Assets/mobile.png'
import playstore from '../Assets/playstore.png'
import stars from '../Assets/stars.svg'

function ForStudents() {
    
    const handleClick = ()=>{
        window.location.href = 'https://forms.gle/YuMS2ajC7TZcAN6d9';
    }

    
    return (
        <div className='ForStudents'>
            
            <div className='For-students-how'>
                <div className='For-students-how-left'>
                    <div>
                        <h1 className='For-students-heading'><span>DoubtConnect</span> a day. Keeps all your<br/><span>Doubts away!</span></h1>
                    </div>
                    <p>Get your doubts solved now on a 1-1 live session by getting connected with a tutor instantly! (psst.. just within 40 seconds)</p>

                    <button onClick={handleClick} className='Button-with-arrow'>Download Now !</button>
                </div>
                <div className='For-students-how-right'>
                    <iframe 
                            src="https://www.youtube.com/embed/WA61tUNIZwM"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
            </div>

            <h1 className='For-students-heading'>How <span>DoubtConnect</span> works</h1>
            <div className="how-we-work">
                <div>
                    <img src={how1}></img>
                    <p>Take a picture of your doubt and upload it on our app and select the subject and chapter your doubt belongs to.</p>
                </div>
                <svg className='left-svg-arrow' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5846 36.75L25.7263 33.7896L32.9742 26.5417H8.16797V22.4583H32.9742L25.7263 15.2104L28.5846 12.25L40.8346 24.5L28.5846 36.75Z" fill="#52ACFF"/>
                </svg>

                <svg className='down-svg-arrow' width="25" height="37" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.249999 29.5176L4.41875 25.4926L14.625 35.6988L14.625 0.767577L20.375 0.767577L20.375 35.6988L30.5812 25.4926L34.75 29.5176L17.5 46.7676L0.249999 29.5176Z" fill="#52ACFF"/>
                </svg>


                <div>
                    <img src={how2}></img>
                    <p>Our AI-enabled proprietary algorithm finds the best suited-tutors and gives you up to 3 tutors to choose from.</p>
                </div>
                <svg className='left-svg-arrow' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5846 36.75L25.7263 33.7896L32.9742 26.5417H8.16797V22.4583H32.9742L25.7263 15.2104L28.5846 12.25L40.8346 24.5L28.5846 36.75Z" fill="#52ACFF"/>
                </svg>
                <svg className='down-svg-arrow' width="25" height="37" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.249999 29.5176L4.41875 25.4926L14.625 35.6988L14.625 0.767577L20.375 0.767577L20.375 35.6988L30.5812 25.4926L34.75 29.5176L17.5 46.7676L0.249999 29.5176Z" fill="#52ACFF"/>
                </svg>
                <div>
                    <img src={how3}></img>
                    <p>Pick your preferred tutor and get instantly connected with them, in 40 seconds for a 1-1 live sesh :)</p>
                </div>

                <button onClick={handleClick}>Get Started
                <svg width="22" height="22" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5846 36.75L25.7263 33.7896L32.9742 26.5417H8.16797V22.4583H32.9742L25.7263 15.2104L28.5846 12.25L40.8346 24.5L28.5846 36.75Z" fill="white"/>
                </svg>
                </button>
            </div>


            <h1 className='For-students-heading'>Our <span>Features</span></h1>
            <div className='For-student-steps'>
                
                <div className='For-student-step' style={{backgroundColor:"#F7F0E7"}}>
                    <div>
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.959 18.583H10.8757C10.8757 14.9031 12.3375 11.374 14.9395 8.7719C17.5416 6.16983 21.0708 4.70801 24.7507 4.70801V7.79134C18.7844 7.79134 13.959 12.6168 13.959 18.583ZM24.7507 13.958V10.8747C20.4957 10.8747 17.0423 14.328 17.0423 18.583H20.1257C20.1257 16.0238 22.1915 13.958 24.7507 13.958ZM7.79232 3.16634C7.79232 1.45509 6.42023 0.0830078 4.70898 0.0830078C2.99773 0.0830078 1.62565 1.45509 1.62565 3.16634C1.62565 4.87759 2.99773 6.24967 4.70898 6.24967C6.42023 6.24967 7.79232 4.87759 7.79232 3.16634ZM14.6527 3.93717H11.5694C11.3905 5.01411 10.8352 5.99259 10.0023 6.69839C9.16949 7.40419 8.11317 7.7915 7.02148 7.79134H2.39648C1.1169 7.79134 0.0839844 8.82426 0.0839844 10.1038V13.958H9.33398V10.4738C10.7624 10.0234 12.0274 9.16415 12.9727 8.0024C13.918 6.84065 14.5021 5.42732 14.6527 3.93717ZM26.2923 23.208C28.0036 23.208 29.3757 21.8359 29.3757 20.1247C29.3757 18.4134 28.0036 17.0413 26.2923 17.0413C24.5811 17.0413 23.209 18.4134 23.209 20.1247C23.209 21.8359 24.5811 23.208 26.2923 23.208ZM28.6048 24.7497H23.9798C22.8881 24.7498 21.8318 24.3625 20.999 23.6567C20.1661 22.9509 19.6108 21.9724 19.4319 20.8955H16.3486C16.4992 22.3857 17.0833 23.799 18.0286 24.9607C18.9739 26.1225 20.2389 26.9817 21.6673 27.4322V30.9163H30.9173V27.0622C30.9173 25.7826 29.8844 24.7497 28.6048 24.7497Z" fill="#C29C6D"/>
                        </svg>
                        <h2>Instant Connect</h2>
                        <p>Get connected with a tutor in just 40 seconds! Whether your exams are a month or a day after, we’ve got the perfect on-spot instant solution for you.</p>
                    </div>
                    <div className='circle c--1'></div>
                    <div className='circle c--2'></div>
                </div>

                <div className='For-student-step Tdown' style={{backgroundColor:"#EFE4FC"}}>
                    <div>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.2207 5.86328H4.83594C4.05842 5.86328 3.31274 6.17215 2.76295 6.72194C2.21317 7.27173 1.9043 8.0174 1.9043 8.79492V27.8506C1.9043 28.6281 2.21317 29.3738 2.76295 29.9236C3.31274 30.4734 4.05842 30.7822 4.83594 30.7822H31.2207C31.9982 30.7822 32.7439 30.4734 33.2937 29.9236C33.8435 29.3738 34.1523 28.6281 34.1523 27.8506V8.79492C34.1523 8.0174 33.8435 7.27173 33.2937 6.72194C32.7439 6.17215 31.9982 5.86328 31.2207 5.86328ZM4.83594 27.8506V8.79492H16.5625V27.8506H4.83594ZM31.2207 27.8506H19.4941V8.79492H31.2207V27.8506ZM20.96 13.9253H29.7549V16.124H20.96V13.9253ZM20.96 17.5898H29.7549V19.7886H20.96V17.5898ZM20.96 21.2544H29.7549V23.4531H20.96V21.2544Z" fill="#8B62B6"/>
                        </svg>
                        <h2>Learning Journey</h2>
                        <p>Our AI helps you track your learning outcomes by constantly assessing your intelligence with assessments prepared by our subject matter experts.</p>
                    </div>
                    <div className='circle c--3'></div>
                    <div className='circle c--5'></div>
                </div>

                <div className='For-student-step' style={{backgroundColor:"#E7F0F0"}}>
                    <div>
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9917 3.08326H13.9084C13.4995 3.08326 13.1074 3.24569 12.8183 3.5348C12.5291 3.82392 12.3667 4.21605 12.3667 4.62493C12.3667 5.0338 12.5291 5.42593 12.8183 5.71505C13.1074 6.00417 13.4995 6.16659 13.9084 6.16659V9.24993H12.0826C12.2654 8.75623 12.3615 8.23468 12.3667 7.70826C12.3668 6.69009 12.0308 5.70036 11.411 4.89258C10.7912 4.0848 9.9222 3.50411 8.93873 3.2406C7.95525 2.97708 6.91231 3.04546 5.97166 3.43513C5.03101 3.82479 4.24523 4.51397 3.7362 5.39576C3.63485 5.57113 3.56904 5.76476 3.54255 5.96557C3.51605 6.16638 3.52938 6.37045 3.58177 6.56611C3.63416 6.76177 3.72459 6.94519 3.84789 7.10589C3.9712 7.26659 4.12495 7.40142 4.30038 7.50268C4.4758 7.60394 4.66946 7.66965 4.87029 7.69604C5.07111 7.72244 5.27517 7.709 5.4708 7.65651C5.66644 7.60402 5.84981 7.51349 6.01045 7.39011C6.17109 7.26673 6.30584 7.1129 6.40701 6.93743C6.54249 6.70331 6.73708 6.50888 6.97132 6.3736C7.20556 6.23832 7.47122 6.16693 7.74171 6.16659C8.15058 6.16659 8.54271 6.32902 8.83183 6.61814C9.12095 6.90726 9.28338 7.29938 9.28338 7.70826C9.28338 8.11714 9.12095 8.50926 8.83183 8.79838C8.54271 9.0875 8.15058 9.24993 7.74171 9.24993C7.33283 9.24993 6.9407 9.41235 6.65159 9.70147C6.36247 9.99059 6.20004 10.3827 6.20004 10.7916C6.20004 11.2005 6.36247 11.5926 6.65159 11.8817C6.9407 12.1708 7.33283 12.3333 7.74171 12.3333C8.15058 12.3333 8.54271 12.4957 8.83183 12.7848C9.12095 13.0739 9.28338 13.4661 9.28338 13.8749C9.28338 14.2838 9.12095 14.6759 8.83183 14.965C8.54271 15.2542 8.15058 15.4166 7.74171 15.4166C7.47122 15.4162 7.20557 15.3449 6.97135 15.2096C6.73712 15.0743 6.54253 14.8799 6.40706 14.6458C6.30589 14.4703 6.17113 14.3165 6.0105 14.1931C5.84986 14.0697 5.66648 13.9792 5.47085 13.9267C5.27522 13.8742 5.07116 13.8608 4.87033 13.8871C4.66951 13.9135 4.47585 13.9792 4.30042 14.0805C4.125 14.1818 3.97124 14.3166 3.84794 14.4773C3.72464 14.638 3.63421 14.8214 3.58182 15.0171C3.52942 15.2127 3.5161 15.4168 3.54259 15.6176C3.56909 15.8184 3.63489 16.0121 3.73624 16.1874C4.24528 17.0692 5.03106 17.7583 5.9717 18.148C6.91234 18.5377 7.95527 18.606 8.93873 18.3425C9.92219 18.079 10.7912 17.4983 11.411 16.6906C12.0308 15.8828 12.3667 14.8931 12.3667 13.8749C12.3615 13.3485 12.2654 12.827 12.0826 12.3333H13.9084V16.9583C13.9084 17.3671 14.0708 17.7593 14.3599 18.0484C14.649 18.3375 15.0412 18.4999 15.45 18.4999C15.8589 18.4999 16.251 18.3375 16.5402 18.0484C16.8293 17.7593 16.9917 17.3671 16.9917 16.9583V6.16659C17.4006 6.16659 17.7927 6.00417 18.0818 5.71505C18.371 5.42593 18.5334 5.0338 18.5334 4.62493C18.5334 4.21605 18.371 3.82392 18.0818 3.5348C17.7927 3.24569 17.4006 3.08326 16.9917 3.08326ZM21.6167 10.7916H23.1584C23.5671 10.7921 23.9589 10.9547 24.2479 11.2437C24.5369 11.5327 24.6995 11.9245 24.7 12.3333V13.8749C24.7 14.2838 24.8625 14.6759 25.1516 14.965C25.4407 15.2542 25.8328 15.4166 26.2417 15.4166C26.6506 15.4166 27.0427 15.2542 27.3318 14.965C27.621 14.6759 27.7834 14.2838 27.7834 13.8749V12.3333C27.782 11.107 27.2943 9.93144 26.4273 9.06437C25.5602 8.1973 24.3846 7.7096 23.1584 7.70826H21.6167C21.2078 7.70826 20.8157 7.87069 20.5266 8.1598C20.2375 8.44892 20.075 8.84105 20.075 9.24993C20.075 9.6588 20.2375 10.0509 20.5266 10.34C20.8157 10.6292 21.2078 10.7916 21.6167 10.7916ZM15.45 24.6666H13.9084C13.4997 24.6661 13.1078 24.5035 12.8188 24.2145C12.5298 23.9255 12.3672 23.5336 12.3667 23.1249V21.5833C12.3667 21.1744 12.2043 20.7823 11.9152 20.4931C11.626 20.204 11.2339 20.0416 10.825 20.0416C10.4162 20.0416 10.024 20.204 9.73492 20.4931C9.4458 20.7823 9.28338 21.1744 9.28338 21.5833V23.1249C9.28471 24.3511 9.77242 25.5268 10.6395 26.3938C11.5066 27.2609 12.6822 27.7486 13.9084 27.7499H15.45C15.8589 27.7499 16.251 27.5875 16.5402 27.2984C16.8293 27.0093 16.9917 26.6171 16.9917 26.2083C16.9917 25.7994 16.8293 25.4073 16.5402 25.1181C16.251 24.829 15.8589 24.6666 15.45 24.6666ZM32.4084 23.1249C32.8172 23.1249 33.2094 22.9625 33.4985 22.6734C33.7876 22.3843 33.95 21.9921 33.95 21.5833C33.95 21.1744 33.7876 20.7823 33.4985 20.4931C33.2094 20.204 32.8172 20.0416 32.4084 20.0416H27.7834V19.2708C27.7834 18.8619 27.621 18.4698 27.3318 18.1806C27.0427 17.8915 26.6506 17.7291 26.2417 17.7291C25.8328 17.7291 25.4407 17.8915 25.1516 18.1806C24.8625 18.4698 24.7 18.8619 24.7 19.2708V20.0416H20.075C19.6662 20.0416 19.274 20.204 18.9849 20.4931C18.6958 20.7823 18.5334 21.1744 18.5334 21.5833C18.5334 21.9921 18.6958 22.3843 18.9849 22.6734C19.274 22.9625 19.6662 23.1249 20.075 23.1249H28.0675C27.7187 24.5418 27.0749 25.8691 26.1781 27.0202C25.8111 26.5445 25.4866 26.0376 25.2082 25.5052C25.1158 25.3251 24.9889 25.1649 24.8347 25.0338C24.6805 24.9028 24.5019 24.8034 24.3093 24.7413C24.1167 24.6792 23.9137 24.6557 23.7119 24.6721C23.5102 24.6884 23.3137 24.7444 23.1335 24.8367C22.9534 24.9291 22.7933 25.056 22.6622 25.2102C22.5311 25.3644 22.4317 25.5429 22.3697 25.7356C22.2443 26.1247 22.2786 26.5476 22.4651 26.9113C22.8803 27.7137 23.3757 28.472 23.9437 29.1745C22.8252 29.9866 21.5533 30.563 20.2052 30.8687C19.8065 30.9567 19.4589 31.1992 19.2388 31.5432C19.0186 31.8871 18.9439 32.3043 19.0311 32.7033C19.1182 33.1022 19.36 33.4503 19.7035 33.6712C20.047 33.892 20.464 33.9676 20.8631 33.8813C22.7975 33.4535 24.6119 32.5994 26.1742 31.3813C27.7496 32.6 29.576 33.4537 31.5216 33.8805C31.7193 33.9241 31.9236 33.9284 32.123 33.893C32.3223 33.8576 32.5127 33.7833 32.6834 33.6743C32.854 33.5653 33.0015 33.4238 33.1174 33.2578C33.2334 33.0919 33.3155 32.9047 33.3591 32.707C33.4027 32.5093 33.4069 32.3049 33.3715 32.1056C33.3361 31.9062 33.2618 31.7158 33.1528 31.5452C33.0439 31.3745 32.9023 31.227 32.7364 31.1111C32.5704 30.9952 32.3832 30.9131 32.1855 30.8695C30.8285 30.5678 29.5461 29.9963 28.4144 29.1889C29.84 27.4341 30.8009 25.3487 31.2085 23.1249H32.4084Z" fill="#52ACFF"/>
                        </svg>
                        <h2>Multi Lingual</h2>
                        <p>From Kashmir to Kanyakumari! We believe when students are tutored in the language of their choice absorb more language than ever.</p>
                    </div>
                    <div className='circle c--6'></div>
                </div>

                <div className='For-student-step Tdown' style={{backgroundColor:"#FBE8EC"}}>
                    <div>
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.1257 16.9583H25.4382V15.0312H27.7507V12.7188H25.4382V10.7917H23.1257V16.9583ZM9.25065 15.0312H21.584V12.7188H9.25065V15.0312ZM11.5632 23.125H13.8757V16.9583H11.5632V18.8854H9.25065V21.1979H11.5632V23.125ZM15.4173 21.1979H27.7507V18.8854H15.4173V21.1979ZM13.8757 32.375C13.4388 32.375 13.073 32.227 12.778 31.931C12.482 31.636 12.334 31.2701 12.334 30.8333V29.2917H6.16732C5.3194 29.2917 4.59379 28.99 3.99048 28.3867C3.38615 27.7824 3.08398 27.0562 3.08398 26.2083V7.70833C3.08398 6.86042 3.38615 6.13429 3.99048 5.52996C4.59379 4.92665 5.3194 4.625 6.16732 4.625H30.834C31.6819 4.625 32.408 4.92665 33.0124 5.52996C33.6157 6.13429 33.9173 6.86042 33.9173 7.70833V26.2083C33.9173 27.0562 33.6157 27.7824 33.0124 28.3867C32.408 28.99 31.6819 29.2917 30.834 29.2917H24.6673V30.8333C24.6673 31.2701 24.5198 31.636 24.2249 31.931C23.9289 32.227 23.5625 32.375 23.1257 32.375H13.8757ZM6.16732 26.2083H30.834V7.70833H6.16732V26.2083Z" fill="#DA5E74"/>
                        </svg>
                        <h2>Personalized</h2>
                        <p>Every student is special and needs to be catered in their own way. Have 1-1 sessions with India’s top tutors and learn at your own pace!</p>
                    </div>
                    <div className='circle c--7'></div>
                </div>

                <div className='For-student-step' style={{backgroundColor:"#DFF6D7"}}>
                    <div>
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2282 23.5934L11.6465 17.5963L7.02148 13.6188L13.1111 13.0484L15.5007 7.48301L17.8902 13.1101L23.9798 13.6188L19.3548 17.5963L20.7732 23.5934L15.5007 20.4176L10.2282 23.5934ZM15.5007 0.0830078C17.5252 0.0830078 19.5299 0.481772 21.4004 1.25653C23.2708 2.03129 24.9703 3.16688 26.4019 4.59844C27.8335 6.03001 28.969 7.72954 29.7438 9.59997C30.5186 11.4704 30.9173 13.4751 30.9173 15.4997C30.9173 19.5884 29.2931 23.5097 26.4019 26.4009C23.5107 29.2921 19.5894 30.9163 15.5007 30.9163C13.4761 30.9163 11.4714 30.5176 9.60095 29.7428C7.73051 28.9681 6.03099 27.8325 4.59942 26.4009C1.70824 23.5097 0.0839844 19.5884 0.0839844 15.4997C0.0839844 11.4109 1.70824 7.48963 4.59942 4.59844C7.49061 1.70726 11.4119 0.0830078 15.5007 0.0830078ZM15.5007 3.16634C12.2296 3.16634 9.09262 4.46574 6.77967 6.77869C4.46672 9.09164 3.16732 12.2287 3.16732 15.4997C3.16732 18.7707 4.46672 21.9077 6.77967 24.2207C9.09262 26.5336 12.2296 27.833 15.5007 27.833C18.7717 27.833 21.9087 26.5336 24.2216 24.2207C26.5346 21.9077 27.834 18.7707 27.834 15.4997C27.834 12.2287 26.5346 9.09164 24.2216 6.77869C21.9087 4.46574 18.7717 3.16634 15.5007 3.16634Z" fill="#4DAC2B"/>
                        </svg>
                        <h2>Streaks and Points</h2>
                        <p>Complete daily streaks and earn points to redeem them for your favorite products.</p>
                    </div>
                    <div className='circle c--10'></div>
                </div>

                <div className='circle c--11'></div>

                <button onClick={handleClick}> Put an end to all your doubts NOW!
                <svg width="22" height="22" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5846 36.75L25.7263 33.7896L32.9742 26.5417H8.16797V22.4583H32.9742L25.7263 15.2104L28.5846 12.25L40.8346 24.5L28.5846 36.75Z" fill="white"/>
                </svg>
                </button>

            </div>


            <h1 className='For-students-heading'>Our <span>Metrics</span></h1>
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


            <h1 className='For-students-heading'>What do our <span>Users</span> say ?</h1>
            <div className='testimonials'>
                <div className='testimonial'>
                    <div className='testimonial-1-comment'>
                        <span className='quote'>&ldquo;</span>
                        <p className='testimonial-big'>
                        I was perplexed with one of the topics in math for days, but the doubt session with the tutor cleared it out in minutes. The idea and the implementation are both <span>perfect</span>. Thank you so much <span>DC</span>!!
                        </p>
                        <p className='testimonial-small'>
                        It was wonderful. His instruction was simple to understand, and the teacher was extremely kind. I would recommend this app to all family and friends as well.
                        </p>
                        <h4 className='testimonial-big'>Hemansh Mohta</h4>
                        <h5 className='testimonial-big'>12th Std Student</h5>
                        
                        <h4 className='testimonial-small'>Swarnmukhi Sharma</h4>
                        <h5 className='testimonial-small'>10th Std Student</h5>
                    </div>
                    <div className='testimonial-1-vid'>
                        <iframe
                            src="https://www.youtube.com/embed/MUPuZXmrLy8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className='testimonial'>
                    <div className='testimonial-2-vid'>
                        <iframe
                            src="https://www.youtube.com/embed/FMHpRVCbrVk"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className='testimonial-2-comment'>
                        <span className='quote'>&ldquo;</span>
                        <p className='testimonial-big'>
                        It was a <span>great experience!</span> The tutor explained the sum very well and tackled the same problem in different methods which helped in my <span>understanding</span>. The interface is very easy to navigate for first time users also.
                        </p>
                        <p className='testimonial-small'>
                        It was a wonderful and easy session. The instructor thoroughly discussed the subject and answered all my questions about it.
                        </p>
                        <h4 className='testimonial-big'>Amani Agarwal</h4>
                        <h4 className='testimonial-small'>Taif Ali</h4>
                        <h5>JEE aspirant</h5>
                    </div>
                </div>
                <div className='testimonial'>
                    <div className='rating'>
                        <div className='rating-d1'>
                            <img src={stars}></img>
                            <p>4.9 Rating</p>
                        </div>
                        <div className='rating-d2'>
                            <h4>Siddharth Rathore</h4>
                            <h5>Neet Aspirant</h5>
                        </div>
                    </div>
                    <div className='testimonial-3-vid'>
                        <iframe
                            src="https://www.youtube.com/embed/FMHpRVCbrVk"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className='testimonial-3-comment'>
                        <span className='quote'>&ldquo;</span>
                        <p className='testimonial-big'>
                        I had a doubt with algebra . My friend had suggested this app.... It proved to be really helpful.
                        </p>
                        <p className='testimonial-small'>
                        I had a doubt with algebra . My friend had suggested this app.... It proved to be really helpful.
                        </p>
                        <h4 className='testimonial-big'>Samiyah Naaz</h4>
                        <h4 className='testimonial-small'>Samiyah Naaz</h4>
                        <h5>JEE Aspirant</h5>
                    </div>
                </div>
            </div>


            <div className='like-footer'>
                <div>
                    <h1>Still here? Looks like you definitely have some doubts.<br/><span>Download the app now.</span></h1>
                    <img src={playstore}></img>
                </div>
                <img className='mobile-app' src={mobile}></img>
            </div>

        </div>
    )
}

export default ForStudents