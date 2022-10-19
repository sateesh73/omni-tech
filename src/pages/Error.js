import React from 'react'
import errorImg from "../resorces/photo/Error.jpg"

const Error = () => {
  return (
    <div className='px-10 py-24 '>
      <img className='h-screen w-screen' src={errorImg} alt='Errorimage'/>
    </div>
  )
}

export default Error