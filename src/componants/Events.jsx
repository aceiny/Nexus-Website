import React from 'react'
import EventImage from "../assets/events/welcomeday.svg"
import imgtop from "../assets/events/imgtop.svg"
import imgbot from "../assets/events/imgbot.svg"
import eventsline from "../assets/events/eventsline.svg"
import EventCard from './utilitis/EventCard'
import { events } from '../data/LandingPage'
const Events = () => {
  return (
    <div className='mb-[376px]'>
        <h1 className='events-big-title text-center mb-[172px]'>Events</h1>
        <div className='flex flex-col md:flex-row gap-[245px] md:gap-[30px] justify-center'>
            <div className='events-container  relative flex  md:flex-col py-[29px] justify-between overflow-x-hidden'>
              <img src={eventsline} alt="" className='absolute rotate-90 top-[-371px] left-[50%] md:rotate-0 md:top-[-19%] md:left-[9px]'/>
                {events.map((event,index)=>{
                  return <EventCard date={event.date} title={event.title} fill={event.fill} />
                })}
            </div>
            <div className='flex items-center gap-[334px] md:gap-[24px] flex-col md:flex-row md:items-start'>
              <div className='relative'>
                  <img src={imgtop} alt="" className='absolute top-[-210px] left-[35%]'/>
                  <img src={EventImage} alt="" className='event-image object-cover object-center'/>
                  <img src={imgbot} alt="" className='absolute left-[21%]'/>
              </div>
              <div className='flex flex-col gap-[32px] text-center items-center md:text-left md:items-start'>
                  <h1 className='event-title'>Welcome Day</h1>
                  <p className='event-description'>Our seasoned members are more than just peers; they are your mentors. They offer valuable insights and guidance to help you not only survive but thrive in the ever-evolving realm of cybersecurity.</p>
                  <p className='event-description mb-[22px]'>**Competitions: We revel in the thrill of cybersecurity challenges. Our goal is to create an environment where you can test your skills, push your limits, and grow in your expertise.</p>
                  <button className='event-button bg-[#76E494]'>view more on instagram</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Events