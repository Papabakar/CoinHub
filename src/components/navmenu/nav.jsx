import  Logo from '../../assets/svgs/logo.svg'
import { Link } from 'react-router-dom'
import NavLinks from './sub-components/navlinks/navlinks'
import './nav.css'
import { marqueeFunction } from '../../utils/marquee/marquee'
import { useEffect } from 'react'
const NavMenu = ({navLinks}) => {

    useEffect(() => {
      marqueeFunction()

      return () => marqueeFunction
    }, []);

    return(
      <div className="px-5 fixed h-20 top-0 left-0 z-[10000000] right-0 flex items-center md:px-10 justify-between md:justify-center gap-20 backdrop-blur-2xl">
          <img src={Logo} className="min-w-[120px]" alt="" />
          <NavLinks navLinks={navLinks} />

          <div className="text-white md:hidden text-4xl">
            <i className='bx bx-menu'></i>
          </div>

          <div className="md:block hidden">
            <a href="" className='primary'>Blog</a>
          </div>
      </div>
    )
}

export default NavMenu   