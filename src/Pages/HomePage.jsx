import React from 'react'
import NavBar from '../componants/utilitis/NavBar'
import LetsDiscover from '../componants/LetsDiscover'
import AboutUs from '../componants/AboutUs'
import OurVision from '../componants/OurVision'
import CoreTeam from '../componants/CoreTeam'
import Events from '../componants/Events'
import Terminal from '../componants/Terminal'
const HomePage = () => {
  return (
    <div className='HomePage overflow-x-hidden'>
        <NavBar />
        <LetsDiscover />
        <div className='underdiscover'>
          <AboutUs />
          <OurVision />
          <Events />
          <CoreTeam />
          <Terminal/>
        </div>
    </div>
  )
}

export default HomePage
//
//