import CoinList from './components/Hero/Coinlist/coin-list'
import Hero from './routes/hero/hero';
import HeroText from './components/HeroText/hero-text';
import Footer from './components/footer/footer';
import Intro from './routes/intro';
import NewsSlider from './routes/news-slider';
import Main from './routes/main';
import Blog from './components/blog/blog';
import Newsletter from './components/newsletter/newsletter';
import HotStories from './components/hot-stories/hot-stories';

function App() {
  return (
    <div className="App overflow-x-hidden flex flex-col gap-20">
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
  );
}

export default App;
