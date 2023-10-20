import React, { useState } from 'react'

const EventCard = ({id,selected,selectedHandler,date = "Nov 4th, 2023",title = "Upcoming Soon",fill=false}) => {
  return (
    <article className='event-card w-fit z-50 flex md:flex-row flex-col md:gap-[70px] md:ms-5  items-center gap-[36px] px-0 md:px-8'>
        <div onClick={()=>selectedHandler(id)} className={`  min-w-[20px] half-transition min-h-[20px] rounded-full border border-white ${fill? "bg-[#76E494]" : "bg-[#262626]"} ${selected?"scale-150":""}`}></div>
        <div className='flex flex-col gap-2 items-center'>
            <p className='event-event-date md:text-[15px]'>{date}</p>
            <p className='event-event-title md:text-[20px] max-w-[166px]'>{title}</p>
        </div>
    </article>
  )
}

export default EventCard