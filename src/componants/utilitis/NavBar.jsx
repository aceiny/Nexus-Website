import React ,{useState} from 'react'
import { NavBarNavs } from '../../data/LandingPage'
import logo from '../../assets/logo.svg'
import {FaBars} from 'react-icons/fa'
const NavBar = () => {
    const [show,setShow] = useState(false) ; const showHandler = () => {setShow(!show)}
  return (
    <header className='flex relative justify-between items-center md:pl-[106px] md:pr-[81px] pt-[37px] mb-[223px] px-[37px]'>
        <img src={logo} alt="logo" className='w-[50px] h-[50px]'/>
        <FaBars className='text-white text-[64px] md:hidden block' onClick={showHandler}/>
        <ul className='gap-[32px] md:flex hidden'>
            {NavBarNavs().map((nav , index) => {
                return (
                    <a href={nav.link} key={index} ><li key={index} className='navbar-navs'>
                        {nav.name}
                    </li></a>
                )
            })}
        </ul>
        <ul className={`gap-[32px] text-center px-2 small-screen-navs md:hidden flex flex-col absolute top-[100%] right-5 rounded half-transition max-h-0 overflow-hidden ${show?" max-h-[1000px] py-2":""} `}>
                {NavBarNavs().map((nav , index) => {
                    return (
                        <a href={nav.link} key={index} ><li key={index} className='navbar-navs'>
                            {nav.name}
                        </li></a>
                    )
                })}
            </ul>
    </header>
  )
}

export default NavBar