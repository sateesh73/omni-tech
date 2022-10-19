import React from 'react'
import heroImg from "../resorces/photo/hero3.jpg"
import {TiTick} from "react-icons/ti"
import Timmer from "../components/Timmer"
import BussinessCard from "../components/BussinessCard"
import TeamCard from "../components/TeamCard"
import sateesh from "../resorces/photo/IntroCardSateesh.png"
import sachin from "../resorces/photo/IntroCardSachin.png"
const Home = () => {
  return (
    <div className='px-10 py-24 flex flex-col'>
      <div className='flex flex-col justify-between lg:flex-row'>
            <div className='py-10 px-4'>
              <h1 className=' text-black font-extrabold text-[4.6rem]'>Special Offer Sale</h1>
              <h1 className='text-lg'>Start your website today and get our Special package included for free:</h1>
              <ul className='py-2'>
                <li className='py-2 flex flex-row'><TiTick size={20} className='text-green'/> Unlimited Free SSL</li>
                <li className='py-2 flex flex-row'><TiTick size={20} className='text-green'/> ree Domain and Whois Privacy</li>
                <li className='py-2 flex flex-row'><TiTick size={20} className='text-green'/> Malware Scanner</li>
                <li className='py-2 flex flex-row'><TiTick size={20} className='text-green'/> Cloudflare Protected Nameservers</li>
              </ul>
              <Timmer/>    
              <button className='bg-black text-white hover:bg-red'>Get Offer</button>
              <h1 className='py-6 flex flex-row'><TiTick size={20} className='text-green'/> Get exclusive 30-day money-back guarantee</h1>
            </div>
            <div>
              <img className='h-[570px] transition duration-500' src={heroImg} alt='Heroimage'/>
            </div>
          </div>
          <div className='lg:px-20'>
             <BussinessCard/>
          </div>
          <div>
          <h1 className='font-bold py-4 text-lg text-red text-center'>Our Team</h1>
          <div className='flex flex-col lg:flex-row py-10 gap-10 justify-center'>
            <TeamCard profile={sateesh}/>
            <TeamCard profile={sachin}/>
          </div>
          </div>
    </div>
    
  )
}

export default Home