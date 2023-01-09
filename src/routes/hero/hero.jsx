import HeroMarquee from "../../components/Hero/heromarquee/marquee";
import NavMenu from "../../components/Hero/navmenu/nav";
import { NAVDATA } from "../../data/document.data";
import Logohero from '../../assets/svgs/hero-logo.svg';
import './hero.style.css'

const Hero = () => {
    return(
        <div className="flex gap-10 flex-col">

            <div className="sticky top-0">
                <NavMenu navLinks={NAVDATA}/>
            </div>


            <div className="relative">
                <div className="logobox absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="relative">
                        <img src={Logohero} className="w-[50%] min-w-[60px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[1000000]" alt="" />
                    </div>
                </div>

                <div className="opacity-50">
                    <HeroMarquee />
                </div>
            </div>

        </div>
    )
}

export default Hero