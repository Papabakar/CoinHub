import React from 'react'
import CoinList from "../Coinlist/coin";
import Hero from "../../routes/hero/hero";
import HeroText from "../HeroText/hero-text";
import FooterMenu from '../Footer/footer';
import Intro from "../../routes/intro";
import NewsSlider from "../../routes/news-slider";
import Main from "../../routes/main";
import Blog from '../Blog/blog';
import Newsletter from "../newsletter/newsletter";
import HotStories from "../hot-stories/hot-stories";
import BlogNewsletter from '../newsletter/newsletter';

function HomePage() {
  return (
    <div className="overflow-x-hidden flex flex-col gap-20">

        <Hero />
        <HeroText />
        <Intro />
        <NewsSlider />
        <Main />
        <Blog />
        <HotStories />
        <FooterMenu />
    </div>
  )
}

export default HomePage