import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import heroImg from "../resorces/photo/logoOmniWhite.png"
import SocialMedia from './SocialMedia'
const BussinessCard = () => {
  return (
    <div className='shadow-2xl px-4 lg:px-20 bg-blue text-white'>
        <div className='flex flex-col justify-between items-center lg:flex-row'>
            <div className='w-full lg:w-[480px]'>
                <h1 className=' font-extrabold text-[3rem]'>Get Your </h1>
                <h1 className='font-extrabold text-[3rem] text-red'>Bussiness</h1>
                <div className='flex flex-row items-center'>
                <h1 className=' font-extrabold text-[3rem]'>Online</h1>
                <FaArrowRight className='text-red m-4' size={30}/>
            </div>
            <h1 className='py-4'>A few weeks ago, we presented you with our new tool for designers and every creative mind out there: Stories by</h1>
            <div className='flex flex-col items-center gap-1 cursor-pointer lg:gap-6 lg:flex-row'>
                <button className='bg-white text-black hover:bg-red hover:text-white'>Join Us Now</button>
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