const CoinListLoadingSkeleton = () => {
  return ["", "", ""].map((item) => {
    return (
        <div className="rounded-xl flex bg-listBg w-[170px] py-3 px-7 items-center animate-pulse">
          <div className="px-5 w-full bg-gray-300 h-3 rounded-2xl"></div>
        </div>
    );
  });
};

export default CoinListLoadingSkeleton;
