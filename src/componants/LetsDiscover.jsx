import ArrowDown from "../assets/arrow-down.svg"
import { socialMedia } from '../data/LandingPage'
import EncryptingEffect from './utilitis/Encrypting'
import Bglines from "../assets/topbg.svg"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const LetsDiscover = () => {
    const scrollTo = (px) => {
        scroll.scrollTo(px); // Scrolling to 100px from the top of the page.
    };
  return (
    <article className=' relative flex lg:px-[76px] md:px[30px] w-[100%] px-[20px] flex-col items-center md:mb-[455px] mb-[307px]'>
      <img src={Bglines} className='topbglines ' alt="" />
      <div className='letsdiscover-text-social-div relative w-full flex items-center justify-center'>
        <div className=' m-auto flex flex-col items-center justify-center'>
          <h1 className='lets-discover-title lg:text-[64px] md:text-[55px] text-[48px]'>Welcome to the {<EncryptingEffect word="Nexus"/>} Security Club!</h1>
          <p className='lest-discover-second-p lg:text-[24px] md:text-[22px] text-[20px]'>Step into our world of expertise, forge connections with fellow enthusiasts, and embark on captivating cybersecurity adventures. Come, be a part of this exhilarating journey! </p>
        </div>
        <div className='social-media flex flex-col items-center gap-[28px]'>
            {socialMedia.map((social,index)=>{
              return <a href={social.link} key={index}><img src={social.icon} alt={social.name} /></a>
            })}
            <img src={ArrowDown} className={'cursor-pointer'} alt="" width={40} onClick={()=>{scrollTo(1200);}}/>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <p className='lets-discover-third-p lg:text-[32px] md:text-[28px] text-[24px]'>let’s discover more together</p>
          <div onClick={()=>{scrollTo(1200)}} className={'cursor-pointer'}>
          <img src={ArrowDown} alt="" />
          <img src={ArrowDown} className='down-arrow' alt="" />
          </div>
      </div>
    </article>
  )
}

export default LetsDiscover