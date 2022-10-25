import React from 'react'
import heroImg from "../resorces/photo/web-bg.png"
import {serviceleft, serviceRight} from "../resorces/Data"
const ChoseUs = () => {
  return (
    <div className='text-center pt-10'>
        <p className='text-lg font-semibold'>BENEFITS OF CHOOSING</p>
        <h1 className='text-2xl font-semibold'>ONE OF THE BEST WEBSITE DESIGN COMPANY</h1>
        <div className='flex lg:flex-row flex-col justify-center pt-10'>
          <div className=''>
            <ul>
              {serviceleft.map(s=>(
                <li key={s.id}  className='flex justify-end gap-12 px-5 py-6'>
                  <h1 className='text-lg font-semibold'>{s.title}</h1>
                  <h1 className='rounded-xl py-1 px-1 bg-gray-md hover:bg-blue'>{s.icon}</h1>
                </li>
              ))}
            </ul>
          </div>
          <div className='px-10'>
            <img className='h-[400px] w-[400px]' src={heroImg} alt='Heroimage'/>
          </div>
          <div>
            <ul>
              {serviceRight.map(s=>(
                <li key={s.id}  className='flex justify-start gap-8 px-5 py-6'>
                  <h1 className='rounded-xl py-1 px-1 bg-gray-md hover:bg-blue'>{s.icon}</h1>
                  <h1 className='text-lg font-semibold'>{s.title}</h1>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default ChoseUs