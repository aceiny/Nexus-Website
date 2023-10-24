import React from 'react'
import Logo from '../../assets/big-logo.svg'
const VisionCard = ({flip = true,image,title,description}) => {
  return (
    <div className='flex justify-center items-center flex-col md:flex-row lg:gap-[157px] md:gap-[50px] gap-[104px] '>
        <div className={`flex flex-col md:items-start px-[20px] md:text-start text-center gap-[42px] ${flip?"md:order-1 lg:pr-[107px] -order-last":"-order-1 lg:pl-[107px]"}`}>
            <h1 className='our-vision-card-title text-center lg:text-[64px] sm:text-[48px] text-[36px]'>{title}</h1>
            <p className='our-vision-card-description lg:text-[32px] sm:text-[26px] text-[16px]'>{description}</p>
        </div>
        <img src={image} alt="" className='lg:w-[416px] lg:h-[416px] md:w-[316px] md:h-[316px] w-[60%] h-[60%] rounded-full' />
    </div>
  )
}

export default VisionCard