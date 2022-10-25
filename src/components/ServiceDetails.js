import React from 'react'
import { serviceDetails } from '../resorces/Data'
import ServiceCard from './ServiceCard'

const ServiceDetails = () => {
  return (
        <div className='flex flex-col lg:flex-row gap-10 py-5'>
            {serviceDetails.map(service=>(
            <ServiceCard key={service.id} title={service.title} description={service.description} icon={service.icon}/>
        ))}
        </div>
  )
}

export default ServiceDetails