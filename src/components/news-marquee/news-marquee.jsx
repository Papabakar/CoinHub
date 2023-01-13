
import {ReactComponent as Calender} from "../../assets/svgs/calendar.svg"
import './news-marquee.style.css'
import { useEffect } from "react"
import { marqueeFunction } from "../../utils/marquee/marquee"

const NewsMarquee = ({data, sliderLine, sliderBox, direction, speed, gap}) => {

    let newBoxName = `.${sliderBox}`
    let newLineName = `.${sliderLine}`

    useEffect(() => {
        marqueeFunction(newLineName, newBoxName, direction, speed, gap)
        return () => marqueeFunction
    }, [newLineName, newBoxName, direction, speed, gap])

    return(
        <div className="md:my-16 my-10 flex flex-col gap-[20px] items-center justify-center">
        <div className={`flex gap-[20px] ${sliderLine} relative overlay min-w-full max-w-none flex-1 flex-shrink-0 items-center justify-center`}>

            {
                data.map((item, index) => {

                    const {date, image, title} = item

                    return(
                        <div key={index} className={`${sliderBox} opacity-70 hover:opacity-100 hover:ease-in-out hover:transition-[600ms] ease-in-out hover:cursor-pointer flex flex-shrink-0 gap-5 w-fit p-3.5 rounded-2xl px-2`}>
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
        </div>
    )
}

export default NewsMarquee