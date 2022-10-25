import React from 'react'
import PlanCard from '../components/PlanCard'
import Contact from './Contact'

const Plan = () => {
  return (
    <div className='px-10 lg:px-20'>
      <h1 className='font-bold text-[2rem] py-4 text-red text-center'>OUR SERVICES</h1>
      <h1 className='font-bold lg:text-[3rem] text-[2.5rem] py-4 text-center -mb-10'>WEBSITES STARTING AT ONLY 2999/- </h1>
      <h1 className='font-bold text-lg py-4 text-center'>FREE SSL | FREE HOSTING | FREE PROFESSIONAL EMAILS </h1>
      <div className='flex lg:flex-row flex-col justify-center'><PlanCard/></div>
      <Contact/>
    </div>
  )
}

export default Plan