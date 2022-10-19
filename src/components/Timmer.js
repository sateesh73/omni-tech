import React from 'react'
import CountDownTimmer from "../hooks/CountDownTimmer"

const Timmer = () => {
    
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    const [days, hours, minutes, seconds] = CountDownTimmer(dateTimeAfterThreeDays);

  return (
    <div>
        <h1>The deal ends in:</h1>
        <ul className='py-4 flex flex-row'>
          <li className='text-center'>
            <div className='w-20 mx-1 p-2 bg-black text-white rounded-lg text-center'>
              <h1>{days}</h1>
            </div>
            <h1>Days:</h1>
          </li>
          <li className='text-center'>
            <div className='w-20 mx-1 p-2 bg-black text-white rounded-lg text-center'>
              <h1>{hours}</h1>
            </div>
            <h1>Hours:</h1>
          </li>
          <li className='text-center'>
            <div className='w-20 mx-1 p-2 bg-black text-white rounded-lg text-center'>
              <h1>{minutes}</h1>
            </div>
            <h1>Minuts:</h1>
          </li>
          <li className='text-center'>
            <div className='w-20 mx-1 p-2 bg-black text-white rounded-lg text-center'>
              <h1>{seconds}</h1>
            </div>
            <h1>seconds:</h1>
          </li>
        </ul>  
    </div>
  )
}

export default Timmer