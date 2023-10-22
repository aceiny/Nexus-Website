import React from 'react'
import roumi from '../../assets/core-team/roumi.png'
import amine from "../../assets/core-team/amine.svg"
const CoreTeamCard = ({bg="#C8BFA2"}) => {
  return (
    <div className='flex items-center gap-[26px] '>
      <div className={`w-[11px] h-[11px] rounded-full bg-[${bg}]`}></div>
      <div className={`border-[0.549px] border-[${bg}] min-w-[264px] min-h-[264px] rounded-full flex justify-center items-center`}>
        <div className={` min-w-[253px overflow bg-[${bg}] min-h-[253px] rounded-full`}>
          <img src={amine} alt="" className=' rounded-br-full rounded-bl-full' />
        </div>
      </div>
      <div className={`w-[11px] h-[11px] rounded-full bg-[${bg}] `}></div>
    </div>
  )
}

export default CoreTeamCard