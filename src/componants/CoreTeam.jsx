import React from 'react'
import CoreTeamCard from './utilitis/CoreTeamCard'
import EncryptingEffect from './utilitis/Encrypting'
const CoreTeam = () => {
  return (
    <div id='our-team'>
      <h1 className='core-team-title text-center mb-[217px]'>{<EncryptingEffect word='Meet Our Team'/>}</h1>
      <div className='flex justify-between px-[110px]'>
        <CoreTeamCard />
        <CoreTeamCard />
        <CoreTeamCard />
      </div>
    </div>
  )
}

export default CoreTeam