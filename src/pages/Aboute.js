import React from 'react'
import TeamCard from '../components/TeamCard'
import heroImg from "../resorces/photo/hero3.jpg"
import sateesh from "../resorces/photo/IntroCardSateesh.png"
import sachin from "../resorces/photo/IntroCardSachin.png"
const Aboute = () => {
  return (
    <div>
      <div className='px-10 py-24 flex'>
        <div className='flex w-1/2 py-10'>
          <ul>
            <li className='text-red font-semibold text-2xl'>
              ABOUT OUR TEAM
            </li>
            <li className='font-extrabold text-[2.6rem] py-5'>
              A Small River Named Duden Flows by
            </li>
            <li className='h-1 w-40 bg-red my-10'>
              
            </li>
            <li>
              Doomtree started as a mess of friends in Minneapolis, fooling around after school, trying to make music without reading the manual. The group had varied tastes—rap, punk, indie rock, pop—so the music they made together often bore the toolmarks of several styles. When they had enough songs, they booked some shows. They made friends with the dudes at Kinkos to print up flyers. They burned some CDs to sell. The shows got bigger. Of necessity, Doomtree’s seven members (Cecil Otter, Dessa, Lazerbeak, Mike Mictlan, P.O.S, Paper Tiger, and Sims) figured out how to run a small business. Lazerbeak’s garage became the merchandise warehouse; P.O.S’ mom’s basement became the webstore. A decade and fifty releases later, it’s all properly official—Doomtree is now a real, live label with international distribution—but not that much has changed. Doomtree still partners with people who aren’t jerks. If members can’t find something they need, they make it themselves. Although each member has a career as a solo artist, every so often the whole crew convenes to make a collaborative record as a group
            </li>
          </ul>
        </div>
        <div className='flex w-1/2 py-10'>
          <img className='h-[570px] transition duration-500' src={heroImg} alt='Heroimage'/>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-red font-semibold text-2xl'>THE MOST POWERFUL THEME ON EARTH</h1>
        <h1 className='font-extrabold text-[2.6rem] py-5'>We are a team of expert designers</h1>
        <p>Lorem ipsum dolor sit amet, consec tetur adipiscing the egtlit sekido eiusmod of the tempor incid dunt ulert labore et dolore all magna aliqua mi bibendum neque egestas.</p>
        <div className='flex flex-col lg:flex-row py-10 gap-10'>
          <TeamCard profile={sateesh}/>
          <TeamCard profile={sachin}/>
        </div>
      </div>
    </div>
    
  )
}

export default Aboute