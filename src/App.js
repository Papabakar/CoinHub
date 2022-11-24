import CoinList from './components/Hero/Coinlist/coin-list'
import Hero from './routes/hero/hero';
import HeroText from './components/HeroText/hero-text';
import Intro from './routes/intro';
import NewsSlider from './routes/news-slider';
import Main from './routes/main';

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
    </div>
  );
}

export default App;
