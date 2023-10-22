import React from 'react'
import logo from '../assets/big-logo.svg'
import EncryptingEffect from './utilitis/Encrypting'
const AboutUs = () => {
  return (
    <article id='about-us' className=' flex justify-center lg:gap-[130px] md:gap-[100px] gap-[50px] mb-[440px]'>
        <img src={logo} alt="" className=' max-w-[290px] max-h-[304px] sm:max-w-[314px] sm:max-h-[328px]'/>
        <div className='flex flex-col gap-[42px]'>
            <h1 className='about-us-title'>{<EncryptingEffect word='About Us'/>}</h1>
            <p className='about-us-description'>At Nexus Security Club, we are driven by a shared mission to kindle the flames of curiosity and a deep-seated passion for cybersecurity within the university community. Our foundation is rooted in the dedication of a group of like-minded individuals.</p>
        </div>
    </article>
  )
}

export default AboutUs