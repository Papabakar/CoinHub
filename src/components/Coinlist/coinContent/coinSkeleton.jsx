import { useEffect } from "react";
import { marqueeFunction } from "../../../utils/marquee/marquee";

const CoinListLoadingSkeleton =  ({ listData, lineName, direction, speed, gap }) => {
  useEffect(() => {
    let boxes = ".coin";

    marqueeFunction(lineName, boxes, direction, speed, gap);

    return () => marqueeFunction;
  }, [lineName, direction, speed, gap]);

  return listData.map((item, index) => {
    const { coin, imgUrl } = item;

    

    return (
      <div key={index} className={`coin`}>
        <div className="rounded-xl flex bg-listBg gap-5 p-3 px-5 items-center animate-pulse">
        <div className="flex gap-3 items-center ">
            <div className="">
                <img src={imgUrl} className="max-w-[30px]" alt="" />
            </div>
            
            <div className="text-xs text-start flex-col items-center justify-center">
                <h3 className="coin-title text-white font-semibold">{coin}</h3>
                <div className='bg-gray-400 h-4 w-16 rounded-md'></div>
            </div>
        </div>
        </div>
      </div>
    );
  });
};

export default CoinListLoadingSkeleton;
