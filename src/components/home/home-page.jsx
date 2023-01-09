import React from 'react'
import CoinList from "../Hero/Coinlist/coin-list";
import Hero from "../../routes/hero/hero";
import HeroText from "../HeroText/hero-text";
import Footer from "../footer/footer";
import Intro from "../../routes/intro";
import NewsSlider from "../../routes/news-slider";
import Main from "../../routes/main";
import Blog from '../Blog/blog';
import Newsletter from "../newsletter/newsletter";
import HotStories from "../hot-stories/hot-stories";
import BlogNewsletter from '../../snippets/article-extras/newsletter';

function HomePage() {
  return (
    <div className=" flex flex-col gap-20">
      <div className="">
        <CoinList /> 
        <Hero />
      </div>

        <HeroText />
        <Intro />
        <NewsSlider />
        <Main />
        <Blog />
        <HotStories />
        <BlogNewsletter />
        <Footer />
    </div>
  )
}

export default HomePage