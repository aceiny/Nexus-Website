import React from 'react'
import VisionCard from './utilitis/VisionCard'
import { OurVisions } from '../data/LandingPage'
const OurVision = () => {
  return (
    <div className='mb-[617px]'>
        <h1 className='our-vision-title text-center mb-[329px]'>Our vision revolves around three core <span className='text-[#76E494]'>principles</span></h1>
        <div className='flex flex-col gap-[202px]'>
            {OurVisions.map((vision,index)=>{
                return <VisionCard key={index} title={vision.title} description={vision.description} image={vision.image} flip={vision.flip}/>
            })}
        </div>
    </div>
  )
}
export default OurVision