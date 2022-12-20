//async function that retrieves all cryptocurreny data

import axios from "axios";

const getCoinData = async (data) => {
  //  will be expecting a JSON object in this format:
  //   {
  //     "cardano": {
  //       "usd": 0.3,
  //       "usd_market_cap": 9057294707.165247,
  //       "usd_24h_change": -2.259341424104707
  //     },
  //     "ethereum": {
  //       "usd": 1209.7,
  //       "usd_market_cap": 145834451869.28052,
  //       "usd_24h_change": 2.1308105007133262
  //     },
  //     ...
  // }

  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ccardano%2Cbinancecoin%2Cdogecoin%2Cethereum%2Ctether%2Csolana%2Cripple&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&precision=3"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getCoinData;
