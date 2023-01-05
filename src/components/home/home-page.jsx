import React from 'react'
import CoinList from "../Hero/Coinlist/coin-list";
import Hero from "../../routes/hero/hero";
import HeroText from "../HeroText/hero-text";
import Footer from "../footer/footer";
import Intro from "../../routes/intro";
import NewsSlider from "../../routes/news-slider";
import Main from "../../routes/main";
import Blog from "../blog/blog";
import Newsletter from "../newsletter/newsletter";
import HotStories from "../hot-stories/hot-stories";

function HomePage() {
  return (
    <div className="overflow-x-hidden flex flex-col gap-20">
      <div className="">
        <CoinList /> 
        <Hero />
      </div>

        <HeroText />
        <Intro />
        <NewsSlider />
        <Main />
        <Blog />
        <Newsletter />
        <HotStories />
        <Footer />
    </div>
  )
}

export default HomePage