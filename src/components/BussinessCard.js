import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import {FaArrowRight} from "react-icons/fa"
import heroImg from "../resorces/photo/logoOmniWhite.png"
import SocialMedia from './SocialMedia'
const BussinessCard = () => {
  return (
    <div className='shadow-2xl px-4 lg:px-20 bg-blue text-white'>
        <div className='flex flex-col justify-between items-center lg:flex-row'>
            <div className='w-full lg:w-[480px]'>
                <h1 className=' font-extrabold lg:text-[3rem] text-[2rem]'>Get Your </h1>
                <h1 className='font-extrabold lg:text-[3rem] text-[2rem] text-red'>Bussiness</h1>
                <div className='flex flex-row items-center'>
                <h1 className=' font-extrabold lg:text-[3rem] text-[2rem]'>Online</h1>
                <FaArrowRight className='text-red m-4' size={30}/>
            </div>
            <h1 className='py-4 font-medium'><span className='text-red'>OMNITECH</span> is a digital marketing and a website designing company with highly qualified professionals.</h1>
            <div className='flex flex-col items-center gap-1 cursor-pointer lg:gap-6 lg:flex-row'>
                <button className='bg-white text-black hover:bg-red hover:text-white flex flex-row items-center justify-center'><AiOutlineWhatsApp size={30} className='text-green'/> WHATSAPP US</button>
                <SocialMedia classItem='flex items-center gap-1 cursor-pointer'
                faceUrl="https://www.facebook.com/" 
                instaUrl="https://www.instagram.com/"
                tweetUrl="https://twitter.com/"
                whatUrl="https://web.whatsapp.com/"/>
            </div>
        </div>
        <div>
           <img className='h-[400px] w-[400px] py-6' src={heroImg} alt='Heroimage'/>
        </div>
    </div>
    </div>
    
  )
}

export default BussinessCard