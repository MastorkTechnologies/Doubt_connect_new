import axios from 'axios'
import React,{useState} from 'react'
import './Support.css'

function Support() {

    const [formData,setFormData] = useState({fname:"",lname:"",number:"",email:"",message:""})
    function submitFormData(){
        axios.get(`https://ycsaqjbvebcwene2ipny2pn35m0pwopw.lambda-url.ap-south-1.on.aws?type=SUPPORT&full_name=${(formData.fname + formData.lname)}&email=${formData.email}&message=${formData.message}&phone_number=${formData.number}`)
        .then(res=>console.log(alert("Message sent. We will contact soon")))
        .catch(err=>{console.log(err);alert("Failed to send the message")})
    }

    return (
        <div className='support'>
            <h1 className='Heading Heading-2'>Need Some <span>Help ?</span></h1>
            <div className='fillc-details'>
                <div className='fillc-details-left'>
                    <div className='fillc-input-container'>
                        <input
                        onChange={(e)=>setFormData({...formData,fname:e.target.value})} 
                        value={formData.fname}
                        placeholder='Enter your First Name'></input> 
                    </div>
                    <div className='fillc-input-container'>
                        <input 
                        onChange={(e)=>setFormData({...formData,lname:e.target.value})} 
                        value={formData.lname}
                        placeholder='Enter your last Name'></input>
                    </div>
                    <div className='fillc-input-container'>
                        <input placeholder='Enter your Number'
                            onChange={(e)=>setFormData({...formData,number:e.target.value})} 
                            value={formData.number}
                        ></input>
                    </div>
                    <div className='fillc-input-container'>
                        <input placeholder='Enter your Email ID'
                            onChange={(e)=>setFormData({...formData,email:e.target.value})} 
                            value={formData.email}
                        ></input>
                    </div>
                    <div className='fillc-input-container'>
                        <textarea placeholder='Enter Your Message'
                            onChange={(e)=>setFormData({...formData,message:e.target.value})} 
                            value={formData.message}
                        ></textarea>
                    </div>
                    <button onClick={()=>submitFormData()}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Support