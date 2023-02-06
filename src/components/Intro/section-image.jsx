
import {ReactComponent as MainImage } from '../../assets/market/marketsvg/main.svg'
import {ReactComponent as TopRight} from '../../assets/market/marketsvg/topright.svg'
import {ReactComponent as BottomRight} from '../../assets/market/marketsvg/bottomright.svg'
import {ReactComponent as BottomLeft} from '../../assets/market/marketsvg/bottomleft.svg'
import gsap from 'gsap'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './section.style.css'
import { useRef } from 'react'

const SectionImage = () => {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    const sectionRef = useRef(null)

    const app = useRef([])

    // useEffect(() => {
    //     let ctx = gsap.context(() => {


    //         let element = app.current


    //         let tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: element.querySelector('#images'),
    //                 scrub: true,
    //                 top: "top 50%",
    //                 bottom: "50% 50%",
    //             }
    //         })
    //         tl.from(element.querySelector('#topRight'), {
    //             autoAlpha: 0,
    //             duration: 0.05
    //         })

    //     });
      
    //   // cleanup context
    //   return () => ctx.revert();
    // }, []);
    

    return(
        <div ref={app} id="images" className="mx-auto">
                <div className=" w-[90%] md:w-[95%] mx-auto relative">
                    <MainImage className="w-full" />
                    <TopRight id="topRight" className="w-[200px] xxs:w-[250px] xxs:-top-5 mx-auto absolute top-0 -right-5"  />
                    <BottomRight className="w-[100px] xxs:w-[125px] xxs:-right-10 mx-auto absolute -bottom-10 -right-5"  />
                    <BottomLeft className="w-[175px] xxs:w-[225px] xxs:-left-10 mx-auto absolute bottom-0 -left-5"  />
                </div>
        </div>
    )
}

export default SectionImage