import { useEffect } from "react";
import { marqueeFunction } from "../../../utils/marquee/marquee";
import CoinInfo from "./coinInfo";
import CoinPrice from "./coinPrice";

const CoinItem = ({ listData, data, lineName, direction, speed, gap }) => {
  useEffect(() => {
    let boxes = ".coin";

    marqueeFunction(lineName, boxes, direction, speed, gap);

    return () => marqueeFunction;
  }, [lineName, direction, speed, gap]);

  return listData.map((item, index) => {
    const { id, coin, imgUrl } = item;

    let coinData = data[`${id}`];
    let priceChange = (coinData["usd_24h_change"]).toFixed(2);
    let change = priceChange < 0 ? "down" : "up";
    

    return (
      <div key={index} className={`coin`}>
        <div className="rounded-xl flex bg-listBg gap-6 p-3 px-5 items-center">
          <CoinInfo imgUrl={imgUrl} coin={coin} marketcap={coinData["usd"]} />
          <CoinPrice change={change} priceChange={priceChange} />
        </div>
      </div>
    );
  });
};

export default CoinItem;
