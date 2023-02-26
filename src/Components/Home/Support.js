import React from 'react'
import './Support.css'

function Support() {
    return (
        <div className='support'>
            <h1 className='Heading Heading-2'>Need Some <span>Help ?</span></h1>
            <div className='fillc-details'>
                <div className='fillc-details-left'>
                    <div className='fillc-input-container'>
                        <input placeholder='Enter your Full Name'></input>
                    </div>
                    <div className='fillc-input-container'>
                        <input placeholder='Enter your School Name'></input>
                    </div>
                    <div className='fillc-input-container'>
                        <input placeholder='Enter your Number'></input>
                    </div>
                    <div className='fillc-input-container'>
                        <input placeholder='Enter your Email ID'></input>
                    </div>
                    <div className='fillc-input-container'>
                        <textarea placeholder='Enter Your Message'></textarea>
                    </div>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Support