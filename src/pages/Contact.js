import React, { useState } from 'react'
import {FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa"
import {SiMinutemailer} from "react-icons/si"
import {BiWorld} from "react-icons/bi"
import {contactDetails} from "../resorces/Data"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [sendmessage, setsendmessage] = useState(false);
  const [input, setinput] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })

  const handleInput=(e)=>{
    const name=e.target.name;
    const value = e.target.value;
    console.log(name, value)

    setinput({...input, [name]: value});

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_jfm6q3h', 'template_codbguj', e.target, 'ncxLyKJaBXezMuzfF')
      .then((result) => {
        setsendmessage(true);
          console.log(result.text);
      }, (error) => {
        setsendmessage(false);
          console.log(error.text);
      });
      
  }

  return (
    <div className='flex justify-center items-center pt-24 pb-5'>
      <div className='flex flex-col justify-center items-center lg:flex-row pt-5'>
        <div className='px-5 bg-blue text-white rounded-2xl lg:rounded-r-none shadow-2xl '>
          <h1 className='font-semibold text-2xl py-5'> Write us</h1>
          <form className='px-10' action='' onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
              <label className='' >Name </label>
              <input className='bg-transparent border-b-2' 
              id="name"
              type="text" 
              required
              value={input.name}
              onChange={handleInput}
              name="name"/>
            </div>
            <div className='flex flex-col py-2'>
              <label className='' >Email </label>
              <input className='bg-transparent border-b-2' 
              id="email"
              type="email" 
              required
              value={input.email}
              onChange={handleInput}
              name="email"/>
            </div>
            <div className='flex flex-col py-2'>
              <label className=''>Subject </label>
              <input className='bg-transparent border-b-2'  
              id="subject"
              type="text" 
              required
              value={input.subject}
              onChange={handleInput}
              name="subject"/>
            </div>
            <div className='flex flex-col py-2'>
              <label className=''>Message </label>
              <textarea className='bg-transparent border-b-2'  
              id="message"
              type="text"
              required
              value={input.message}
              onChange={handleInput} 
              name="message"/>
            </div>
            <div className='py-5 flex justify-center'>
              <button className='bg-white text-black hover:bg-red hover:text-white' >Send message</button>
            </div>
          </form>
        </div>
        <div className=' relative px-5 bg-black text-white rounded-2xl lg:rounded-l-none shadow-2xl'>
          <h1 className='font-semibold text-2xl py-5'>Contact information</h1>
          {sendmessage && <span className=' absolute top-0 right-0 -translate-y-1/2 text-black font-semibold border rounded-md bg-red'>Send message Succesfully</span>}
          <p className='text-gray font-light'>We are open to any suggestion or just to have a chat</p>
          <div className='py-7 px-6 flex flex-col'>
            <div className='flex flex-col gap-6 py-6 lg:flex-row'>
              <FaMapMarkerAlt size={20}/>
              <h1 className='text-white font-medium'> Address: <span className='text-gray font-light'>{contactDetails.address}</span></h1>
            </div>
            <div className='flex flex-col gap-6 py-6 lg:flex-row'>
              <FaPhoneAlt size={20}/>
              <h1 className='text-white font-medium'> Phone: <span className='text-gray font-light'>{contactDetails.phonNumber}</span></h1>
            </div>
            <div className='flex flex-col gap-6 py-6 lg:flex-row'>
              <SiMinutemailer size={20}/>
              <h1 className='text-white font-medium'> Email: <span className='text-gray font-light'>{contactDetails.emailId}</span></h1>
            </div>
            <div className='flex flex-col gap-6 py-6 lg:flex-row'> 
              <BiWorld size={20}/>
              <h1 className='text-white font-medium'> Website: <span className='text-gray font-light'>{contactDetails.webId}</span></h1>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact