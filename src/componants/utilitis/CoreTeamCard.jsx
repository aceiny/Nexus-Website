import React from 'react'
const CoreTeamCard = ({image,color}) => {
  return (
    <div className='flex items-center gap-[26px] '>
      <div className={`w-[11px] h-[11px] rounded-full`} style={{backgroundColor:color}}></div>
      <div className={`core-team-photo border-[0.549px]  w-[264px] h-[264px] rounded-full flex justify-center items-center`} style={{borderColor:color}}>
        <div className={` w-[97%] overflow h-[97%] rounded-full`} style={{backgroundColor:color}}>
          <img src={image} alt="" className='rounded-br-full rounded-bl-full' />
        </div>
      </div>
      <div className={`w-[11px] h-[11px] rounded-full `} style={{backgroundColor:color}}></div>
    </div>
  )
}

export default CoreTeamCard