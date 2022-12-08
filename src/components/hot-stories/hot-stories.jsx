import 'swiper/swiper-bundle.css';
import SlideHot from './hot-slide';
import { HOTSTORIES } from '../../data/document.data';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import {ReactComponent as ArrowRight}  from '../../assets/svgs/arrow-right.svg'
import {ReactComponent as ArrowLeft} from '../../assets/svgs/arrow-left.svg'
SwiperCore.use([Pagination, EffectCoverflow]);

const swiperOptions = {
        effect:"default",
        grabCursor:"true",
        centeredSlides:"true",
        spaceBetween: 200,
        slidesPerView: 4,
        loop:"false",
        pagination:{ clickable: true, dynamicBullets: true },
        coverflowEffect:{
            rotate: 20,
            stretch: 25,
            depth: 250,
            modifier: 1,
            slideShadows: false,
        },
        breakpoints:{
            1440: {
            spaceBetween: 200,
            slidesPerView: 4,
            },
            500: {
            spaceBetween: 100,
            slidesPerView: 2,
            },
            411: {
            spaceBetween: 100,
            slidesPerView: 2,
            },
            300: {
            spaceBetween: 0,
            slidesPerView: 1,
            },
        }
    }


const HotStories = () => {
    return(
        <div className="my-20">

            <div className="flex justify-between px-10 my-10">
                <h3 className='text-white text-2xl'>Hot Stories</h3>
                <div className="flex gap-2 items-center">
                    <button className='rounded-full bg-[#353447] px-7 py-2'><ArrowLeft/></button>
                    <button className='rounded-full bg-[#353447] px-7 py-2'><ArrowRight /></button>
                </div>
            </div>

            <div className="text-white  ml-auto">
            <Swiper {...swiperOptions}>
                    {HOTSTORIES.map((item) => {
                        const{id} = item
                        return(
                            <SwiperSlide key={id} ><SlideHot data={item} /></SwiperSlide>
                        )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default HotStories