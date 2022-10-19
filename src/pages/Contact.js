import React from 'react'
import {FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa"
import {SiMinutemailer} from "react-icons/si"
import {BiWorld} from "react-icons/bi"
import {contactDetails} from "../resorces/Data"
const Contact = () => {
  return (
    <div className='flex justify-center items-center pt-24 pb-5'>
      <div className='flex flex-col justify-center items-center lg:flex-row pt-5'>
        <div className='px-5 bg-blue text-white rounded-2xl lg:rounded-r-none shadow-2xl '>
          <h1 className='font-semibold text-2xl py-5'> Write us</h1>
          <form className='px-10'>
            <div className='flex flex-col py-2'>
              <label className=''>Name </label>
              <input className='bg-transparent border-b-2'/>
            </div>
            <div className='flex flex-col py-2'>
              <label className=''>Email </label>
              <input className='bg-transparent border-b-2'/>
            </div>
            <div className='flex flex-col py-2'>
              <label className=''>Subject </label>
              <input className='bg-transparent border-b-2'/>
            </div>
            <div className='flex flex-col py-2'>
              <label className=''>Message </label>
              <textarea className='bg-transparent border-b-2'/>
            </div>
            <div className='py-5 flex justify-center'>
              <button className='bg-white text-black hover:bg-red hover:text-white'>Send message</button>
            </div>
          </form>
        </div>
        <div className='px-5 bg-black text-white rounded-2xl lg:rounded-l-none shadow-2xl'>
          <h1 className='font-semibold text-2xl py-5'>Contact information</h1>
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