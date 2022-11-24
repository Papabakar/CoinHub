import {ReactComponent as Logo} from '../../../assets/svgs/logo.svg'
import { Link } from 'react-router-dom'
import SearchBar from './sub-components/searchbar/searchbar'
import NavLinks from './sub-components/navlinks/navlinks'
import './nav.css'

const NavMenu = ({navLinks}) => {
    return(
        <div className="flex justify-around items-center px-5">
           <div className='min-w-[50px]' >
                <Logo />
           </div>

           <NavLinks navLinks={navLinks} />

           <div className="">
                <SearchBar />
           </div>
        </div>
    )
}

export default NavMenu   