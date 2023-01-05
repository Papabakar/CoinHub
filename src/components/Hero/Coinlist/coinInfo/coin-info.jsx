const CoinInfo = ({imgUrl, coin, marketcap}) => {
    return(
        <div className="flex gap-3 items-center ">
            <div className="">
                <img src={imgUrl} className="max-w-[30px]" alt="" />
            </div>
            
            <div className="text-xs text-start flex-col items-center justify-center">
                <h3 className="coin-title text-white font-semibold">{coin}</h3>
                <span className='text-gray-200'>${marketcap.toLocaleString("en-US")}</span>
            </div>
        </div>
    )
}

export default CoinInfo