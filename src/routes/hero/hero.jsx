import HeroMarquee from "../../components/Hero/heroMarquee";
import NavMenu from "../../components/navmenu/nav";
import { NAVDATA } from "../../data/document.data";
import Logohero from '../../assets/svgs/hero-logo.svg';
import './hero.style.css'
import CoinList from "../../components/Coinlist/coin";

const Hero = () => {
    return(
        <div className="flex gap-10 flex-col" id="#home">

            <NavMenu navLinks={NAVDATA}/>

            <div className="relative mt-32">
                <div className="back-shadow"></div>
                <div className="logobox absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="relative w-fit h-fit">
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