import React, { useEffect, useState } from 'react'
import {FaAngleDoubleUp} from "react-icons/fa"

const ScrollToTop = () => {
    const [showTopButton, setshowTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 300){
            setshowTopButton(true)
            }else{
                setshowTopButton(false)
            } 
        })
      
    }, [])

    const scrollTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }
    

  return (
    <div className=''>
        {showTopButton && <FaAngleDoubleUp size={30} onClick={scrollTop} className='text-red cursor-pointer fixed bottom-[20%] right-5'/>}
    </div>
  )
}

export default ScrollToTop