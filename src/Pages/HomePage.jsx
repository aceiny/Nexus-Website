import {useState} from 'react'
import NavBar from '../componants/utilitis/NavBar'
import LetsDiscover from '../componants/LetsDiscover'
import AboutUs from '../componants/AboutUs'
import OurVision from '../componants/OurVision'
import CoreTeam from '../componants/CoreTeam'
import Events from '../componants/Events'
import TerminalEmu from '../componants/Terminal'
const HomePage = () => {
    const [showNav, setShowNav] = useState(false);
    const showHandler = () => {
        setShowNav(!showNav)
    }
  return (
    <div className={`HomePage overflow-x-hidden bg-linear ${showNav?'fixed':''}`}>
        <NavBar showHandler={showHandler} show={showNav} />
        <LetsDiscover />
        <div className='underdiscover'>
          <AboutUs />
          <OurVision />
          <Events />
          <CoreTeam />
          <TerminalEmu/>
        </div>
    </div>
  )
}

export default HomePage
//
//