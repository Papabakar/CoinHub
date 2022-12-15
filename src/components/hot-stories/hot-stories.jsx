import "swiper/swiper-bundle.css";
import SlideHot from "./hot-slide";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../assets/svgs/arrow-left.svg";
import { useState, useEffect } from "react";
import getAllArticles from "../../backend/functions/articles/getArticles";
import HotSlideLoadingSkeleton from "./hot-slide-loading-skeleton";

SwiperCore.use([Pagination, EffectCoverflow]);

const swiperOptions = {
  effect: "default",
  grabCursor: "true",
  centeredSlides: "true",
  spaceBetween: 200,
  slidesPerView: 4,
  loop: "false",
  pagination: { clickable: true, dynamicBullets: true },
  coverflowEffect: {
    rotate: 20,
    stretch: 25,
    depth: 250,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
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
  },
};

let ArticlesData = [];

const HotStories = () => {
  const [loadingArticles, setLoadingArticles] = useState(true);

  useEffect(() => {
    //Runs only on the first render

    const fetchArticles = async () => {
      ArticlesData = await getAllArticles();
      setLoadingArticles(false);
    };

    fetchArticles().catch(console.error);
  }, []);

  return (
    <div className="my-20">
      <div className="flex justify-between px-10 my-10">
        <h3 className="text-white text-2xl">Hot Stories</h3>
        <div className="flex gap-2 items-center">
          <button className="rounded-full bg-[#353447] px-7 py-2">
            <ArrowLeft />
          </button>
          <button className="rounded-full bg-[#353447] px-7 py-2">
            <ArrowRight />
          </button>
        </div>
      </div>

      {loadingArticles ? (
        <div className="grid grid-rows-1 p-5 md:p-10 justify-center items-center md:grid-cols-2 xl:grid-cols-3 md:grid-rows-2 gap-7 mt-10 mx-auto">
          <HotSlideLoadingSkeleton />
        </div>
      ) : (
        <div>
          {ArticlesData.length === 0 ? (
            <p className="text-white text-xl">
              FAILED TO RETRIEVE ARTICLE DATA
            </p>
          ) : (
            <div className="text-white  ml-auto">
              <Swiper {...swiperOptions}>
                {ArticlesData.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <SlideHot data={item} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HotStories;
