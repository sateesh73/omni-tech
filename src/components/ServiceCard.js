import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='flex flex-col w-fit bg-gray-md px-5 py-5 gap-5 border-[3px] border-slate rounded-lg shadow-lg hover:bg-blue hover:text-white  hover:scale-105 hover:rounded-3xl duration-700'>
      <h1>{props.icon}</h1>
      <h1 className='font-bold text-2xl'>{props.title}</h1>
      <p className='font-semibold text-md '>{props.description}</p>
    </div>
  )
}

export default ServiceCard