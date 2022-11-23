import { LISTDATA } from '../../data/document.data'
import './coin-list.scss'

const CoinList = () => {

    return(
        <div className="flex gap-3 my-5 py-5 relative overlay overflow-x-hidden">
            <div className="list-container"></div>
            {LISTDATA.map((item) => {
                const {coin, imgUrl, marketcap, priceChange, change, id} = item

                return(
                <div key={id}>
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
                </div>
                )
            })}
        </div>
    )
}

export default CoinList 