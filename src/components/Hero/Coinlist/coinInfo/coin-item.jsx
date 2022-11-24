
import { useEffect } from "react";
import { marqueeFunction } from "../../../../utils/marquee/marquee";
import gsap from "gsap";
import CoinInfo from "./coin-info";
import CoinPrice from './coin-price';

const CoinItem = ({data, lineName, direction, speed, gap}) => {
    useEffect(() => {
        let boxes = ".coin";

        marqueeFunction(lineName, boxes, direction, speed, gap)
        
        return () => marqueeFunction;
    }, [lineName, direction, speed, gap]);

    return(
    data.map((item) => {
        const {coin, imgUrl, marketcap, priceChange, change, id} = item

    return(
        <div key={id} className={`coin`}>
            <div className="rounded-xl flex bg-listBg gap-5 p-3 px-5 items-center">
                <CoinInfo imgUrl={imgUrl} coin={coin} marketcap={marketcap} />
                <CoinPrice change={change} priceChange={priceChange} />
            </div>
        </div>
    )
}))}

export default CoinItem