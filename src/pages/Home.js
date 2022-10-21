import React from 'react'
import heroImg from "../resorces/photo/hero3.jpg"
import {TiTick} from "react-icons/ti"
import BussinessCard from "../components/BussinessCard"
import TeamCard from "../components/TeamCard"
import sateesh from "../resorces/photo/IntroCardSateesh.png"
import sachin from "../resorces/photo/IntroCardSachin.png"
const Home = () => {
  return (
    <div className='px-20 py-24 flex flex-col'>
      <div className='flex flex-col lg:flex-row'>
            <div className='py-10 lg:px-20 lg:w-1/2'>
              <h1 className='text-[2rem] lg:text-[3.5rem] font-extrabold uppercase'>GET A <span className='text-red'>PROFESSIONAL WEBSITE </span>FOR YOUR BUSINESS</h1>
              <button className='bg-black text-white hover:bg-red'>Get Offer</button>
              <h1 className='py-6 flex flex-row font-medium'><TiTick size={20} className='text-green'/> Get exclusive 30-day money-back guarantee</h1>
            </div>
            <div className='lg:w-1/2 py-10'>
              <img className='h-[412px]' src={heroImg} alt='Heroimage'/>
            </div>
          </div>
          <div className='lg:px-20 py-5'>
             <BussinessCard/>
          </div>
          <div>
          <h1 className='font-bold text-[2rem] py-4 text-red text-center'>ABOUT US</h1>
          <h1 className='font-medium text-center'>Our team is highly skilled and experienced in understanding the general consumer behaviours and moderating the UX of the website according to the purchase behaviours. Your website will be carefully tailored with precisely following our proprietary 162 steps procedure which results in extremely high quality <span className='text-red font-bold'>ERROR FREE WEBSITES</span> which generates results.</h1>
          <div className='flex flex-col lg:flex-row py-10 gap-10 justify-center'>
            <TeamCard profile={sateesh}/>
            <TeamCard profile={sachin}/>
          </div>
          </div>
    </div>
    
  )
}

export default Home