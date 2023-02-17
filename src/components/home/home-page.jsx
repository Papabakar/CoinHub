import React, { useState, useEffect } from "react";
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
import NavBarOptions from "../navmenu/mobile-nav";
import NavMenu from "../../components/navmenu/nav";
import { NAVDATA } from "../../data/document.data";
import SEO from "../SEO/seo";
import Logohero from "../../assets/svgs/hero-logo.svg";

function HomePage() {
  let hash = useLocation().hash;
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(`${hash.substring(1)}`);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    return () => {
      hash = null;
    };
  }, [hash]);

  return (
    <div className="overflow-x-hidden flex flex-col gap-20">
      <SEO 
      title={"CoinHub | Fastest real-time crypto news source."}
      img={Logohero}
      url={'https://coinhub.cc/'}
      desc={"CoinHub is the fastest real-time crypto news source covering cryptocurrency, Bitcoin, Ethereum, Defi and more."}
      />
      <NavMenu
        navLinks={NAVDATA}
        setNavFun={() => setShowNav((previousState) => !previousState)}
        navState={showNav}
      />

      {showNav ? (
        <NavBarOptions
          setNavFun={() => setShowNav((previousState) => !previousState)}
          navState={showNav}
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default HomePage;
