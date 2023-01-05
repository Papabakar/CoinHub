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
    <div className="flex gap-6 my-5 py-5 price__marquee relative overlay overflow-x-hidden">
      <div className="list-container"></div>
      
      {loadingCoinData ? (
        <CoinListLoadingSkeleton 
        listData={COINLISTDATA}
          gap={"24px"}
          speed={0.2}
          lineName={`.price__marquee`}
          direction={1}
          />
      ) : (
        <CoinItem
          listData={COINLISTDATA}
          data={CoinData}
          gap={"24px"}
          speed={0.2}
          lineName={`.price__marquee`}
          direction={1}
        />
      )}
    </div>
  );
};

export default CoinList;
