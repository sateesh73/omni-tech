import React from 'react'
import { TiTick } from 'react-icons/ti'
import { planDetails } from '../resorces/Data'

const PlanCard = () => {
  return (
    <div className='grid grid-cols-1 gap-10 pt-10 lg:grid-cols-3'>
        {planDetails.map(plan=>(
          <div key={plan.id} className=" border-[3px] border-slate rounded-2xl p-8 relative  hover:border-red hover:scale-105 duration-500 hover:shadow-2xl">
            <h1 className='text-[2rem] font-semibold text-center'>{plan.title}</h1>
            {plan.mostpopular && <p className='absolute top-0 -translate-y-1/2 bg-red font-semibold tracking-wide text-white px-2 py-1 rounded-full shadow-md'>Most Popular</p>}
            <p className='font-medium text-center leading-5'>{plan.description}</p>
            <p className='font-medium text-center'>₹<span className='text-[1.5rem] font-bold shadow-md rounded-full'>{plan.price}</span>/mo</p>
            <ul className='py-10'>
              {plan.feature.map(feature=>(
                <li key={feature}><h1 className='flex flex-row font-medium'><TiTick size={20} className='text-green'/>{feature}</h1></li>
              ))}
            </ul>
           <a href="/Contact" className='flex justify-center'><button className='border-[3px] border-slate bg-transparent text-black hover:bg-red hover:text-white absolute bottom-5'>Get Offer</button></a>
          </div>
        ))}
    </div>
  )
}

export default PlanCard