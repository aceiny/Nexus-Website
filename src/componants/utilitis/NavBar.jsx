import {NavBarNavs} from '../../data/LandingPage'
import logo from '../../assets/logo.svg'
import {FaBars} from 'react-icons/fa'

// eslint-disable-next-line react/prop-types
const NavBar = ({showHandler,show}) => {

    return (
        <header
            className='flex relative justify-between items-center md:pl-[106px] md:pr-[81px] pt-[37px] mb-[203px] px-[37px]'>
            <img src={logo} alt="logo" className='w-[50px] h-[50px]'/>
            <FaBars className='text-white text-[64px] md:hidden block' onClick={showHandler}/>
            <ul className='gap-[32px] md:flex hidden'>
                {NavBarNavs().map((nav, index) => {
                    return (
                        <a href={nav.link} key={index}>
                            <li key={index} className='navbar-navs'>
                                {nav.name}
                            </li>
                        </a>
                    )
                })}
            </ul>
            <ul className={`gap-[32px]  w-full text-center px-2 bg-linear z-30  
            md:hidden flex flex-col absolute top-[100%] right-0 rounded half-transition max-h-0 h-[90vh] overflow-hidden  ${show ? " max-h-[1000px] pt-20" : ""} `}>
                {NavBarNavs().map((nav, index) => {
                    return (
                        <div className={'flex flex-col items-center'}>
                            <a href={nav.link} key={index} onClick={showHandler}>
                                <li key={index} className='navbar-navs'>
                                    {nav.name}
                                </li>
                            </a>
                            <div className={'w-[50%] h-[3px] bg-[#76E494] mt-6'}/>
                        </div>
                    )
                })}
            </ul>
        </header>
    )
}

export default NavBar