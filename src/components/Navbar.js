import {useState} from 'react'
import logoImg from "../resorces/photo/logoWhite.png"
import {menu} from "../resorces/Data"
import {FaBars, FaTimes} from "react-icons/fa"
const Navbar = () => {
    const [nav, setnav] = useState(false)
  return (
    <div className='fixed flex justify-between left-0 right-0 items-center h-24 px-10 bg-blue text-white'>
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
          <a href='/Login'>Sign Up</a>
        </button>
        </div>
            <div onClick={()=>setnav(!nav)} className=' pr-2 cursor-pointer md:hidden'>
              {nav ? <FaTimes size={30}/>:  <FaBars size={30}/>}
            </div>
            {
            nav ?  <ul className='fixed flex flex-col justify-center items-center top-20 left-0 right-0 cursor-pointer bg-blue min-h-screen'>
              {menu.map(({id, link, path})=>(
            <li key={id} className='px-4 py-6 cursor-pointer capitalize font-medium text-lg hover:scale-105 duration-200 hover:text-red'>
                    <a href={path}>{link}</a>
                </li> 
              ))}
            </ul>: ""
            }
    </div>
  )
}

export default Navbar