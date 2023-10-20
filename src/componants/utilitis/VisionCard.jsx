import React from 'react'
import Logo from '../../assets/big-logo.svg'
const VisionCard = ({flip = true,image,title,description}) => {
  return (
    <div className='flex justify-center items-center flex-col md:flex-row lg:gap-[157px] md:gap-[50px] gap-[104px] '>
        <div className={`flex flex-col px-[20px] md:text-left text-center gap-[42px] ${flip?"md:order-1 lg:pr-[107px] -order-last":"-order-1 lg:pl-[107px]"}`}>
            <h1 className='our-vision-card-title lg:text-[64px] md:text-[54px] text-[54px]'>{title}</h1>
            <p className='our-vision-card-description lg:text-[32px] md:text-[26px] text-[24px]'>{description}</p>
        </div>
        <img src={image} alt="" className='lg:w-[416px] lg:h-[416px] md:w-[316px] md:h-[316px] w-[80%] h-[80%] rounded-full' />
    </div>
  )
}

export default VisionCard