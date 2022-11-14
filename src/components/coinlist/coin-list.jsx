
import TRON from '../../assets/logos/TRON.png'
import BNB from '../../assets/logos/BNB.png'
import BTC from '../../assets/logos/BTC.png'
import DOGE from '../../assets/logos/DOGE.png'
import ETH from '../../assets/logos/ETH.png'
import SOL from '../../assets/logos/SOL.png'
import USDT from '../../assets/logos/USDT.png'
import XRP from '../../assets/logos/XRP.png'
import './coin-list.style.css'

const list  = [
    {
        coin: 'ADA',
        imgUrl: TRON,
        marketcap: '2,034,201',
        priceChange: 3.7,
        change: 'up'
    },
    {
        coin: 'BNB',
        imgUrl: BNB,
        marketcap: '2,034,201',
        priceChange: 3.7,
        change: 'down'
    },
    {
        coin: 'BTC',
        imgUrl: BTC,
        marketcap: '2,034,201',
        priceChange: 3.7,
        change: 'up'
    },
    {
        coin: 'DOGE',
        imgUrl: DOGE,
        marketcap: '2,034,201',
        priceChange: 3.7,
        change: 'down'
    },
    {
        coin: 'ETH',
        imgUrl: ETH,
        marketcap: '2,034,201',
        priceChange: 3.7,
        change: 'up'
    },
    {
        coin: 'SOL',
        imgUrl: SOL,
        marketcap: '2,034,201',
        priceChange: 3.7,
        change: 'down'
    },
    {
        coin: 'USDT',
        imgUrl: USDT,
        marketcap: '2,034,201',
        priceChange: 3.7,
        change: 'up'
    },
    {
        coin: 'XRP',
        imgUrl: XRP,
        marketcap: '2,034,201',
        priceChange: 3.7,
        change: 'down'
    },
]

const CoinList = () => {
    return(
        <div className="flex gap-3 my-5 py-5 relative overlay overflow-x-hidden">
            <div className="list-container"></div>
            <div className=""></div>
        {list.map((item) => {
            const {coin, imgUrl, marketcap, priceChange, change} = item

            return(
            <div className="rounded-xl flex bg-listBg gap-5 p-3 px-5 items-center">
                <div className="flex gap-1.5 items-center ">
                    <div className="">
                        <img src={imgUrl} className="max-w-[30px]" alt="" />
                    </div>
                    
                    <div className="text-xs text-start flex-col items-center justify-center">
                        <h3 className="text-white font-semibold">{coin}</h3>
                        <span className='text-gray-200'>{marketcap}</span>
                    </div>
                </div>

                <div className={`text-xs ${change === 'up' ? 'text-up' : 'text-down'} flex items-center`}>
                    <span><i className={`bx bx-chevron-${change}`} ></i></span>
                    <span>{priceChange}%</span>
                </div>
            </div>
            )
        })}
        </div>
    )
}

export default CoinList 