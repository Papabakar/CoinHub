
const CoinPrice = ({change, priceChange}) => {
    return(
        <div className={`text-xs ${change === 'up' ? 'text-up' : 'text-down'} flex items-center`}>
            <span><i className={`bx bx-chevron-${change}`} ></i></span>
            <span>{priceChange}%</span>
        </div>
    )
}

export default CoinPrice