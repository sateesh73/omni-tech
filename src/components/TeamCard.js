import React from 'react'
const TeamCard = (props) => {
  return (
    <div>
        <img className='h-[512px] shadow-2xl' src={props.profile} alt='Heroimage'/>
    </div>
  )
}

export default TeamCard