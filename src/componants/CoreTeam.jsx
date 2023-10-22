import React from 'react'
import CoreTeamCard from './utilitis/CoreTeamCard'
import EncryptingEffect from './utilitis/Encrypting'
const CoreTeam = () => {
  return (
    <div id='our-team' className='pb-[200px]'>
      <h1 className='core-team-title text-center mb-[217px]'>{<EncryptingEffect word='Meet Our Team'/>}</h1>
      <div className='md:flex-row flex flex-col gap-[150px] md:justify-between items-center px-[110px]'>
        <CoreTeamCard bg={"#C8BFA2"}/>
        <CoreTeamCard bg={"#FFFFF"} />
        <CoreTeamCard />
      </div>
    </div>
  )
}

export default CoreTeam