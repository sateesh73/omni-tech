import React from 'react'
import SocialMedia from './SocialMedia'
import heroImg from "../resorces/photo/logoOmniWhite.png"
import { FaPhoneAlt, FaRegCopyright } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'
import { SiMinutemailer } from 'react-icons/si'
import {contactDetails} from "../resorces/Data"
const Footer = () => {
  return (
    <div className='left-0 right-0 bg-blue text-white px-20'>
      <div className='flex flex-col justify-between items-center lg:flex-row py-10'>
        <div className=''>
          <img className='h-18 w-24 py-6' src={heroImg} alt='Heroimage'/>
        </div>
        <div className='flex gap-5'>
           <FaPhoneAlt size={20} className='text-red'/>
           {contactDetails.phonNumber}
        </div>
        <div className='flex gap-5'>
          <BiWorld size={20} className='text-red'/>
          {contactDetails.webId}
        </div>
        <div className='flex gap-5'>
           <SiMinutemailer size={20} className='text-red'/>
           {contactDetails.emailId}
        </div>
        
      </div>
      <div className='h-0.5 w-full bg-white my-10'>
      </div>
      <SocialMedia classItem='gap-5 flex justify-center cursor-pointer' 
      faceUrl="https://www.facebook.com/" 
      instaUrl="https://www.instagram.com/"
      tweetUrl="https://twitter.com/"
      whatUrl="https://web.whatsapp.com/" />
      <div className='flex gap-2 items-center justify-center py-5'>
        <FaRegCopyright/>Copyright All right reserved
      </div>
    </div>
  )
}

export default Footer