import "swiper/swiper-bundle.css";
import HotStory from "./hot-slide";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../assets/svgs/arrow-left.svg";
import { useState, useEffect } from "react";
import HotSlideLoadingSkeleton from "./hot-slide-loading-skeleton";
import { useRef } from "react";
import { Navigation } from 'swiper';
import { getAllBlogs } from "../../backend/functions/blogs/getBlogs";

SwiperCore.use([Pagination, EffectCoverflow]);


const swiperOptions = {
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  navigation: {
      nextEl: "#nextBtn",
      prevEl: "#prevBtn",
  },
  breakpoints: {
        2400: {
          slidesPerView: 6,
        },
        1980: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 3,
        },
        620: {
          slidesPerView: 2,
        },
        300: {
          slidesPerView: 1,
        },
      },
}

// const swiperOptions = {
//   effect: "default",
//   grabCursor: "true",
//   centeredSlides: "true",
//   spaceBetween: 10,
//   loop: "false",
//   pagination: { clickable: true, dynamicBullets: true },
//   coverflowEffect: {
//     rotate: 20,
//     stretch: 25,
//     depth: 250,
//     modifier: 1,
//     slideShadows: false,
//   },
//   breakpoints: {
//     1440: {
//       spaceBetween: 20,
//       slidesPerView: 4,
//     },
//     500: {
//       spaceBetween: 10,
//       slidesPerView: 2,
//     },
//     411: {
//       spaceBetween: 10,
//       slidesPerView: 2,
//     },
//     300: {
//       spaceBetween: 0,
//       slidesPerView: 1,
//     },
//   },
// };

let ArticlesData = [];

const HotStories = () => {

  const swiperRef = useRef();

  
  const [loadingArticles, setLoadingArticles] = useState(true);

  useEffect(() => {
    //Runs only on the first render

    const fetchArticles = async () => {
      const allArticlesData = await getAllBlogs();

      //sort in descending order based on view count
      allArticlesData.sort((a, b) => b.viewCount - a.viewCount);

      //only top 10
      ArticlesData = allArticlesData.slice(0, 10);
      
      setLoadingArticles(false);
    };

    fetchArticles().catch(console.error);
  }, []);

  return (
    <div className="" id="#hot">
      <div className="flex justify-between px-10 my-10">
        <h3 className="text-white text-2xl">Hot Stories</h3>
        <div className="flex gap-2 items-center">
          <button onClick={() => swiperRef.current?.slidePrev()} className="rounded-full bg-[#353447] px-7 py-2">
            <ArrowLeft />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()} className="rounded-full bg-[#353447] px-7 py-2">
            <ArrowRight />
          </button>
        </div>
      </div>

      {loadingArticles ? (
        <div className="">
          <HotSlideLoadingSkeleton />
        </div>
      ) : (
        <div className="px-5 md:px-10 flex justify-center items-center">
          {ArticlesData.length === 0 ? (
            <p className="text-white text-xl">
              FAILED TO RETRIEVE ARTICLE DATA
            </p>
          ) : (
              <Swiper 
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper
              }}

              {...swiperOptions}>
                {ArticlesData.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className="flex justify-center sm:max-w-fit items-center"><HotStory data={item} /></SwiperSlide>
                  );
                })}
              </Swiper>

          )}
        </div>
      )}
    </div>
  );
};

export default HotStories;
