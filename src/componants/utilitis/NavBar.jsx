import React from 'react'
import { NavBarNavs } from '../../data/LandingPage'
import logo from '../../assets/logo.svg'
import {FaBars} from 'react-icons/fa'
const NavBar = () => {
  return (
    <header className='flex justify-between items-center md:pl-[106px] md:pr-[81px] pt-[37px] mb-[223px] px-[37px]'>
        <img src={logo} alt="logo" className='w-[50px] h-[50px]'/>
        <FaBars className='text-white text-[64px] md:hidden block'/>
        <ul className='gap-[32px] md:flex hidden'>
            {NavBarNavs().map((nav , index) => {
                return (
                    <a href={nav.link}><li key={index} className='navbar-navs'>
                        {nav.name}
                    </li></a>
                )
            })}
        </ul>
    </header>
  )
}

export default NavBar