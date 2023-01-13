import React, { useEffect } from "react";
import CoinList from "../Coinlist/coin";
import Hero from "../../routes/hero/hero";
import HeroText from "../HeroText/hero-text";
import Intro from "../../routes/intro";
import NewsSlider from "../../routes/news-slider";
import Main from "../../routes/main";
import Newsletter from "../newsletter/newsletter";
import HotStories from "../hot-stories/hot-stories";
import BlogNewsletter from "../newsletter/newsletter";
import NewsMarquee from "../news-marquee/news-marquee";
import { NEWSSLIDERDATA } from "../../data/document.data";
import FooterMenu from "../footer/footer";
import Blog from "../blog/blog";
import { useLocation } from "react-router-dom";

function HomePage() {
  let hash = useLocation().hash;

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(`${hash.substring(1)}`);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    return () => {
      hash = null
    }
  }, [hash]);

  return (
    <div className="overflow-x-hidden flex flex-col gap-20">
      <Hero />
      <HeroText />
      <Intro />
      <NewsMarquee
        data={NEWSSLIDERDATA}
        sliderLine={"snippetLine"}
        sliderBox={"snippetBox"}
        direction={1}
        speed={0.1}
        gap={20}
      />
      <Main />
      <NewsMarquee
        data={NEWSSLIDERDATA}
        sliderLine={"snippetLine_2"}
        sliderBox={"snippetBox_2"}
        direction={-1}
        speed={0.1}
        gap={20}
      />
      <Blog />
      <HotStories />
      <FooterMenu />
    </div>
  );
}

export default HomePage;
