import React from 'react'
import CoreTeamCard from './utilitis/CoreTeamCard'
import EncryptingEffect from './utilitis/Encrypting'
import { coreTeam } from '../data/LandingPage'
const CoreTeam = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" id="our-team" className='pb-[200px]'>
      <h2 className='text-[#76E494] font-bold text-[44px] text-center mt-10'>Core Council</h2>
      <h1 className='core-team-title text-[28px] text-center mb-[100px]'>{<EncryptingEffect word='Meet Our Team'/>}</h1>
      <div className='md:flex-row flex flex-col gap-[150px] md:gap-0 md:justify-between items-center lg:px-[90px]'>
        {
          coreTeam.map((member,index)=>{
            return <CoreTeamCard key={index} name={member.name} color={member.color} image={member.image} linkedIn={member.linkedIn} github={member.github} />
          })
        }
      </div>
    </div>
  )
}

export default CoreTeam