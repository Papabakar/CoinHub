import  Logo from '../../../assets/svgs/logo.svg'
import { Link } from 'react-router-dom'
import SearchBar from './sub-components/searchbar/searchbar'
import NavLinks from './sub-components/navlinks/navlinks'
import './nav.css'
import { marqueeFunction } from '../../../utils/marquee/marquee'
import { useEffect } from 'react'
const NavMenu = ({navLinks}) => {

    useEffect(() => {
      marqueeFunction()

      return () => marqueeFunction
    }, []);

    return(
        <div className="px-5 md:px-10 flex items-center justify-between backdrop-blur-2xl sticky top-0 right-0 left-0">
           <div className='flex items-center gap-5 list-container py-5' >
                <img src={Logo} className="min-w-[175px]" alt="" />
                <NavLinks navLinks={navLinks} />
           </div>


           <div className="text-white md:hidden text-4xl">
              <i class='bx bx-menu'></i>
           </div>
        </div>
    )
}

export default NavMenu   