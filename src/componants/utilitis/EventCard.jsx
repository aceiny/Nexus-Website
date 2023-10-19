import React from 'react'

const EventCard = ({date = "Nov 4th, 2023",title = "Upcoming Soon",fill=false}) => {
  return (
    <article className='z-50 flex md:flex-row flex-col md:gap-[70px] items-center gap-[36px] md:px-0 px-8'>
        <div className={`w-[20px] h-[20px] rounded-full border border-white ${fill? "bg-[#76E494]" : "bg-[#262626]"}`}></div>
        <div className='flex flex-col gap-2 items-center'>
            <p className='event-event-date'>{date}</p>
            <p className='event-event-title max-w-[166px]'>{title}</p>
        </div>
    </article>
  )
}

export default EventCard