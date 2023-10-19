import React from 'react'
import roumi from '../../assets/core-team/roumi.png'
const CoreTeamCard = () => {
  return (
    <div className='flex flex-col items-center gap-[35px]'>
        <img src={roumi} alt="" className='w-[400px] h-[340px]'/>
        <p className='core-team-name'>roumi</p>
    </div>
  )
}

export default CoreTeamCard