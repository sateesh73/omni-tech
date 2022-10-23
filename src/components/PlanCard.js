import React from 'react'
import { TiTick } from 'react-icons/ti'

const PlanCard = () => {
  return (
    <div className='px-5 py-5 border-2 flex flex-col items-center hover:scale-105 duration-300 hover:shadow-2xl'>
        <h1 className='font-semibold text-[2rem] text-center'>Bronze Website Package</h1>
        <h1 className='font-medium text-center'>One Page Website</h1>
        <h1 className='font-bold text-[3rem] text-center'>₹24,999</h1>
        <button className='bg-black text-white hover:bg-red'>Get Offer</button>
        <ul className='py-10'>
            <li><h1 className='flex flex-row font-medium'><TiTick size={20} className='text-green'/> 7 Pages Business Website</h1></li>
            <li><h1 className='flex flex-row font-medium'><TiTick size={20} className='text-green'/> Customized Design</h1></li>
            <li><h1 className='flex flex-row font-medium'><TiTick size={20} className='text-green'/> Free Hosting 1 Year </h1></li>
            <li><h1 className='flex flex-row font-medium'><TiTick size={20} className='text-green'/> SEO Ready Website </h1></li>
            <li><h1 className='flex flex-row font-medium'><TiTick size={20} className='text-green'/> Free Business E-Mail</h1></li>
            <li><h1 className='flex flex-row font-medium'><TiTick size={20} className='text-green'/> SSL Certificate </h1></li>
            <li><h1 className='flex flex-row font-medium'><TiTick size={20} className='text-green'/> Responsive Design</h1></li>
            <li><h1 className='flex flex-row font-medium'><TiTick size={20} className='text-green'/> Contact Form</h1></li>
        </ul>
    </div>
  )
}

export default PlanCard