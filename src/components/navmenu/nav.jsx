import  Logo from '../../assets/svgs/logo.svg'
import { Link } from 'react-router-dom'
import NavLinks from './sub-components/navlinks/navlinks'
import './nav.css'
import { marqueeFunction } from '../../utils/marquee/marquee'
import { useEffect } from 'react'
const NavMenu = ({navLinks, setNavFun, navState}) => {

    useEffect(() => {
        marqueeFunction()
        return () => marqueeFunction
    }, []);
    
    return(
          <div className="px-5 fixed h-14 top-0 left-0 z-[10] right-0 flex items-center base:px-10 justify-between base:justify-center gap-20 backdrop-blur-2xl list-container">
              <Link to="/#home">
                <img src={Logo} className="min-w-[120px]" alt="" />
              </Link > 
              <div className="hidden base:flex">
              <NavLinks navLinks={navLinks} />
              </div>

              <div  onClick={() => setNavFun(!navState)} className="text-white base:hidden text-4xl">
                <i className='bx bx-menu'></i>
              </div>

              <div className="base:block hidden">
                <a href="" className='nav-primary'>Explore Blogs</a>
              </div>
          </div>
        )
    }

export default NavMenu   