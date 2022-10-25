import {useState} from 'react'
import logoImg from "../resorces/photo/logoWhite.png"
import {menu} from "../resorces/Data"
import {FaBars, FaTimes} from "react-icons/fa"
const Navbar = () => {
    const [nav, setnav] = useState(false)

  return (
    <div className='fixed flex justify-between top-0 left-0 w-screen z-[100] shadow-2xl items-center h-24 px-10 bg-blue text-white'>
      <a href="/"><img className='h-18 w-24 cursor-pointer' src={logoImg} alt="logo"/></a>
        <div className='items-center hidden md:flex'>
        <ul className='hidden md:flex'>
          {menu.map(({id, link, path})=>(
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-lg hover:scale-105 duration-200 hover:text-red'>
                <a href={path}>{link}</a>
            </li> 
          ))}
        </ul>
        <button className='bg-white text-black hover:bg-red hover:text-white w-[150px]'>
          <a href='/Contact'>Contact Us</a>
        </button>
        </div>
            <div onClick={()=>setnav(!nav)} className=' pr-2 cursor-pointer md:hidden'>
              {nav ? <FaTimes size={30}/>:  <FaBars size={30}/>}
            </div>
            {
            nav ?  <ul className='absolute flex flex-col justify-center items-center cursor-pointer bg-blue top-24 right-0'>
              {menu.map(({id, link, path})=>(
            <li key={id} className='px-20 py-6 cursor-pointer capitalize font-medium text-lg hover:scale-105 duration-200 hover:text-red'>
                    <a href={path}>{link}</a>
                </li> 
              ))}
            </ul>: ""
            }
    </div>
  )
}

export default Navbar