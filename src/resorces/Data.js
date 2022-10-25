import {HiDesktopComputer, HiOutlineCurrencyRupee} from "react-icons/hi"
import {GiAutoRepair} from "react-icons/gi"
import {FaBullhorn, FaMobileAlt, FaTruck, FaPalette} from "react-icons/fa"
import { AiOutlineStock } from "react-icons/ai"
import { DiTechcrunch } from "react-icons/di"
import { MdDesignServices , MdSpeed} from "react-icons/md"
import { RiCustomerService2Fill } from "react-icons/ri"

export const menu = [
    {
        id: 1,
        link: "plan",
        path: "omni-tech/Plan"
    }, 
    {
        id: 2,
        link: "projects",
        path: "omni-tech/Projects"
    }, 
    {
        id: 3,
        link: "service",
        path: "omni-tech/Service"
    }, 
    {
        id: 4,
        link: "about",
        path: "omni-tech/Aboute"
    },  
]

export const contactDetails = {
    phonNumber: "+91 9109576423",
    emailId: "sateeshvarma73@gmail.com",
    webId: "www.omnitech.org.com",
    address: "Pandan Tola, Madhya Pradesh 486001"
}

export const planDetails=[
    {
        id:1,
        title:"Bronze Website",
        description:"One Page Website",
        price: "2,999",
        feature:[
            "1 Pages Business Website",
            "Free Hosting 1 Yea",
            "SEO Ready Website",
            "SSL Certificate",
            "Responsive Design",
            "Contact Form"
        ],
        mostpopular: false
    },
    {
        id:2,
        title:"Silver Website",
        description:"three Page Website",
        price: "4,999",
        feature:[
            "3 Pages Business Website",
            "Customized Design",
            "Free Hosting 1 Yea",
            "SEO Ready Website",
            "Free Business E-Mail",
            "SSL Certificate",
            "Responsive Design",
            "Contact Form"
        ],
        mostpopular: true
    },
    {
        id:3,
        title:"Gold Website",
        description:"seven Page Website",
        price: "24,999",
        feature:[
            "7 Pages Business Website ",
            "Free Hosting 1 Yea",
            "SEO Ready Website",
            "Free Business E-Mail",
            "SSL Certificate",
            "Responsive Design",
            "Contact Form"
        ],
        mostpopular: false
    }
]

export const serviceDetails=[
    {
        id:1,
        title:"Responsive Web Design",
        description:"To start an online business, blogging, or affiliate marketing, the first thing you need is a website. The website considers the online identity or store for brands and businesses. There are thousands of eCommerce websites and many more are being created every day.",
        icon:<HiDesktopComputer size={50} className='hover:scale-110 duration-500 text-red'/>
    },
    {
        id:2,
        title:"Website Re Design",
        description:"We re-create professional websites with a professional look. Corporate website design inherits the cultural aesthetic and values of every website design project.",
        icon:<GiAutoRepair size={50} className='hover:rotate-12 duration-500 text-red'/>
    },
    {
        id:3,
        title:"Social Media Marketing",
        description:"At Omni Tech, our group of profoundly talented and experienced marketers to help you accomplish your business objectives. Our tailored internet marketing solutions focus on producing leads through commitment and brand advancement on the web.",
        icon:<FaBullhorn size={50} className='hover:translate-x-2 duration-500 text-red'/>
    },
]

export const serviceleft = [

    {
        id:1,
        title:"Custom Web Solutions",
        icon:<HiDesktopComputer size={30} className='text-red'/>
    },
    {
        id:2,
        title:"Mobile Responsive",
        icon:<FaMobileAlt size={30} className='text-red'/>
    },
    {
        id:3,
        title:"Affordable Price",
        icon:<HiOutlineCurrencyRupee size={30} className='text-red'/>
    },
    {
        id:4,
        title:"On-time delivery",
        icon:<FaTruck size={30} className='text-red'/>
    },
    {
        id:5,
        title:"Lead generation",
        icon:<AiOutlineStock size={30} className='text-red'/>
    },
    
]
export const serviceRight=[
    
    {
        id:6,
        title:"Latest Technologies",
        icon:<DiTechcrunch size={30} className='text-red'/>
    },
    {
        id:7,
        title:"Customized designs",
        icon:<FaPalette size={30} className='text-red'/>
    },
    {
        id:8,
        title:"customer support",
        icon:<RiCustomerService2Fill size={30} className='text-red'/>
    },
    {
        id:9,
        title:"Trending designs",
        icon:<MdDesignServices size={30} className='text-red'/>
    },
    {
        id:10,
        title:"Fastest service",
        icon:<MdSpeed size={30} className='text-red'/>
    },
]