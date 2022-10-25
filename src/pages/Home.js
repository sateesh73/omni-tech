import React from 'react'
import heroImg from "../resorces/photo/hero3.jpg"
import {TiTick} from "react-icons/ti"
import BussinessCard from "../components/BussinessCard"
import PlanCard from '../components/PlanCard'
import Aboute from './Aboute'
import ServiceDetails from '../components/ServiceDetails'

const Home = () => {
  return (
        <div className='pt-24 flex flex-col'>
          <div className='px-10 lg:px-20 flex flex-col lg:flex-row'>
            <div className='py-10 lg:px-20 lg:w-1/2'>
              <h1 className='text-[2rem] lg:text-[3.5rem] font-extrabold uppercase'>GET A <span className='text-red'>PROFESSIONAL WEBSITE </span>FOR YOUR BUSINESS</h1>
              <button className='bg-black text-white hover:bg-red'>Get Offer</button>
              <h1 className='py-6 flex flex-row font-medium'><TiTick size={20} className='text-green'/> Get exclusive 30-day money-back guarantee</h1>
            </div>
            <div className='lg:w-1/2 py-10'>
              <img className='h-[412px]' src={heroImg} alt='Heroimage'/>
            </div>
          </div>
          <div className='px-10 lg:px-20 py-5'>
             <BussinessCard/>
          </div>
          <div className='px-10 lg:px-20'>
            <h1 className='font-bold text-[2rem] py-4 text-red text-center'>PLAN & PRICING</h1>
            <h1 className='font-bold lg:text-[3rem] text-[2.5rem] py-4 text-center -mb-10'>WEBSITES STARTING AT ONLY 2999/- </h1>
            <h1 className='font-bold text-lg py-4 text-center'>FREE SSL | FREE HOSTING | FREE PROFESSIONAL EMAILS </h1>
          <PlanCard/>
          </div>
          <div className='-my-20'>
            <Aboute/> 
          </div>
          <div className='px-10 lg:px-20 pb-10'>
            <h1 className='font-bold text-[2rem] text-red text-center'>OUR SERVICES</h1>
            <h1 className='font-bold lg:text-[2.5rem] py-4 text-[2rem] text-center -mb-10'>Get Ready To Make A <span className='text-red lg:text-[3rem] text-[2.5rem]'>Brand.</span></h1>
            <p className='font-bold py-4 text-lg text-center'>Creative digital solutions for every need.</p>
            <ServiceDetails/>
          </div>
        </div>
    
  )
}

export default Home