import React from 'react'
import NavBar from '../componants/utilitis/NavBar'
import LetsDiscover from '../componants/LetsDiscover'
import AboutUs from '../componants/AboutUs'
import OurVision from '../componants/OurVision'
import CoreTeam from '../componants/CoreTeam'
import Events from '../componants/Events'
const HomePage = () => {
  return (
    <div className='bg-[#292929] min-h-screen'>
        <NavBar />
        <LetsDiscover />
        <AboutUs />
        <OurVision />
        <Events />
        <CoreTeam />
    </div>
  )
}

export default HomePage