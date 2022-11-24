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
        <div className="flex justify-around items-center px-5">
           <div className='' >
                <img src={Logo} className="min-w-[200px]" alt="" />
           </div>

           <NavLinks navLinks={navLinks} />

           <div className="">
                <SearchBar />
           </div>
        </div>
    )
}

export default NavMenu   