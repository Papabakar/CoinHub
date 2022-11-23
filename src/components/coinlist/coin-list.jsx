import { LISTDATA } from '../../data/document.data'
import './coin-list.scss'
import CoinItem from './coinInfo/coin-item';

const CoinList = () => {
    return(
        <div className="flex gap-5 my-5 py-5 price__marquee relative overlay overflow-x-hidden">
            <div className="list-container"></div>
            <CoinItem data={LISTDATA} gap={'20px'} speed={0.25} lineName={`.price__marquee`} direction={1} />
        </div>
    )
}

export default CoinList 