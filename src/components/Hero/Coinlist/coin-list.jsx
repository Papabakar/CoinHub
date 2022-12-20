import { COINLISTDATA } from "../../../data/document.data";
import "./coin-list.css";
import CoinItem from "./coinInfo/coin-item";
import { useState, useEffect } from "react";
import getCoinData from "../../../backend/functions/coins/get-coins-data";
import CoinListLoadingSkeleton from "./coin-list-loader";

let CoinData;

const CoinList = () => {
  const [loadingCoinData, setLoadingCoinData] = useState(true);

  useEffect(() => {
    //Runs only on the first render

    const fetchCoinData = async () => {
      CoinData = await getCoinData();
      setLoadingCoinData(false);
    };

    fetchCoinData().catch(console.error);
  }, []);

  return (
    <div>
      {loadingCoinData ? (
        <div className="flex justify-center items-center gap-5 mt-3">
          <CoinListLoadingSkeleton />
        </div>
      ) : (
        <div className="flex gap-5 my-5 py-5 price__marquee relative overlay overflow-x-hidden">
          <div className="list-container"></div>
          <CoinItem
            listData={COINLISTDATA}
            data={CoinData}
            gap={"20"}
            speed={0.125}
            lineName={`.price__marquee`}
            direction={1}
          />
        </div>
      )}
    </div>
  );
};

export default CoinList;
