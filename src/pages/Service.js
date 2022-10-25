import React from 'react'
import ChoseUs from '../components/ChoseUs'
import ServiceDetails from '../components/ServiceDetails'


const Service = () => {
  return (
    <div className='px-10 lg:px-20 py-24'>
      <h1 className='font-bold text-[2rem] py-4 text-red text-center'>Our Exciting & Inspiring Web Design Services</h1>
      <p className='font-medium text-center'>A great website turns visitors into potential customers and buyers. Rejoice your customers by providing easy navigation, qualified content information, unique services, and lag-free performance across all devices. The latest technologies ensure speed and compatibility. All of these will make sure the visitor of your website will stay on your page for a longer time and be engaged to get new leads. With Webnox Technologies create websites that are attractive, simple to use, and drive sales for your business. We are not your typical average website designing and web application development company in Coimbatore, we exceed your expectations by our talented web designers & developers. A great website can help set your organization apart from your competitors and gets your business noticed.</p>
      <ServiceDetails/>
      <div className='flex flex-col lg:flex-row justify-between border-[3px] shadow-xl px-5 py-5'>
        <h1 className='font-bold lg:text-lg text-center'>Don’t Waste Your Time, Bring Your Business Online</h1>
        <a href='/Contact'><button className=' bg-blue text-white hover:bg-red w-fit px-4 text-sm'>CREATE YOUR DIGITAL FOOTPRINT TODAY</button></a>
      </div>
      <ChoseUs/>
    </div>
  )
}

export default Service