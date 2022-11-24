
import {ReactComponent as Calender} from "../../assets/svgs/calendar.svg"
import './news-marquee.style.css'
import { useEffect } from "react"
import { marqueeFunction } from "../../utils/marquee/marquee"

const NewsMarquee = ({data, sliderLine, sliderBox, direction, speed, gap}) => {

    useEffect(() => {
        marqueeFunction(sliderLine, sliderBox, direction, speed, gap)
        return () => marqueeFunction
    }, [sliderLine, sliderBox, direction, speed, gap])

    return(
        <div className="flex gap-[20px] snippetLine relative overlay min-w-full max-w-none flex-1 flex-shrink-0 items-center justify-center">

            {
                data.map((item) => {

                    const {date, image, title} = item

                    return(
                        <div className="snippetBox opacity-70 hover:opacity-100 hover:ease-in-out hover:transition-[600ms] ease-in-out hover:cursor-pointer flex flex-shrink-0 gap-5 w-fit p-3.5 rounded-[35px] px-2">
                            <div className="rounded-2xl max-w-[60px] my-auto ml-2">
                                <img src={image} alt="" />
                            </div>

                            <div className="flex flex-col gap-1 justify-center items-start">
                                <h3 className="font-medium text-base max-w-[25ch] text-gray-200">{title}</h3>
                                <div className="flex justify-start text-sm text-gray-400 items-center gap-1">
                                    <Calender />
                                    <span>{date}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NewsMarquee