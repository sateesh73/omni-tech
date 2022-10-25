import React from 'react'
import { FaFacebook} from "react-icons/fa"
import {AiFillInstagram, AiFillTwitterCircle, AiOutlineWhatsApp} from "react-icons/ai"
const SocialMedia = (props) => {
    const item = props.classItem;
    const faceUrl = props.faceUrl;
    const instaUrl = props.instaUrl;
    const tweetUrl = props.tweetUrl;
    const whatUrl = props.whatUrl;

  return (
    <div className={item}>
      <a href={instaUrl} target="_blank" rel="noopener noreferrer"><AiFillInstagram size={30} className='text-white hover:text-red hover:scale-110 duration-200'/> </a>   
      <a href={faceUrl} target="_blank" rel="noopener noreferrer"><FaFacebook size={30} className='text-white hover:text-red hover:scale-110 duration-200'/> </a>
      <a href={tweetUrl} target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle size={30} className='text-white hover:text-red hover:scale-110 duration-200'/></a>
      <a href={whatUrl} target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp size={30} className='text-white hover:text-red hover:scale-110 duration-200'/></a>
    </div>
  )
}

export default SocialMedia