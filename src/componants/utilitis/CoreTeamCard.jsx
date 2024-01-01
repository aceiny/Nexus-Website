import React from 'react'
const CoreTeamCard = ({image,color,name}) => {
  return (
    <div className='flex items-center gap-[26px] '>
      {/*<div className={`w-[11px] h-[11px] rounded-full`} style={{backgroundColor:color}}></div>*/}
      <div className={`core-team-photo w-[270px] h-[264px] flex justify-center items-center`}>
        <div className={` w-[97%] overflow h-[97%] flex flex-col gap-4 items-center justify-center`} >
          <img src={image} alt="" className='' />
         <h2 className={"text-acme text-white text-xl font-semibold"}>{name}</h2>
        </div>
      </div>
      {/*<div className={`w-[11px] h-[11px] rounded-full `} style={{backgroundColor:color}}></div>*/}
    </div>
  )
}

export default CoreTeamCard