import React from 'react'
import CoreTeamCard from './utilitis/CoreTeamCard'
const CoreTeam = () => {
  return (
    <div>
      <h1 className='core-team-title text-center mb-[217px]'>Meet Our Team</h1>
      <div className='flex justify-between px-[110px]'>
        <CoreTeamCard />
        <CoreTeamCard />
        <CoreTeamCard />
      </div>
    </div>
  )
}

export default CoreTeam