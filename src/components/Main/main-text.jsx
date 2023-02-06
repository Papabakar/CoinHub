// import handDown from '../../assets/svgs/hand-down.svg';
const MainText = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="">
        <h2 className="font-bold text-4xl text-white">Market Spotter</h2>
      </div>

      <p className="text-gray-400 max-w-[60ch]">
        Are you tired of constantly monitoring the market for the right time to
        make a trade? Look no further! 'Market Spotter' offers advanced
        algorithms and real-time data analysis for informed trades. Say goodbye
        to chart analysis, hello to profits. Try it today!
      </p>

      <div className="">
        <a href="https://marketspotter.io?refferal=@papabakar_1392" target="_blank" className="nav-primary text-white">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default MainText;
