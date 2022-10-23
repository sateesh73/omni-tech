import React from 'react'
import TeamCard from '../components/TeamCard'
import sateesh from "../resorces/photo/IntroCardSateesh.png"
import sachin from "../resorces/photo/IntroCardSachin.png"
const Aboute = () => {
  return (
    <div className='px-10 lg:px-20 topmargin flex flex-col'>
      <h1 className='font-bold text-[2rem] py-4 text-red text-center'>ABOUT US</h1>
          <h1 className='font-medium text-center'>Our team is highly skilled and experienced in understanding the general consumer behaviours and moderating the UX of the website according to the purchase behaviours. Your website will be carefully tailored with precisely following our proprietary 162 steps procedure which results in extremely high quality <span className='text-red font-bold'>ERROR FREE WEBSITES</span> which generates results.</h1>
          <div className='flex flex-col lg:flex-row py-10 gap-10 justify-center'>
            <TeamCard profile={sateesh}/>
            <TeamCard profile={sachin}/>
          </div>        
    </div>
    
  )
}

export default Aboute