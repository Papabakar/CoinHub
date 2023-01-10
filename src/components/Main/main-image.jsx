
import {ReactComponent as MainImagee }  from '../../assets/market/marketsvg-2/main.svg'
import {ReactComponent as TopRight }  from '../../assets/market/marketsvg-2/topleft.svg'
import {ReactComponent as BottomLeft } from '../../assets/market/marketsvg-2/bottomleft.svg'

const MainImage = () => {
    return(
        <div className="mx-auto">
            <div className=" w-[105%] mx-auto relative">
                <MainImagee className="w-full" />
                <TopRight id="topRight" className="w-[300px] xxs:w-[350px] md:w-[450px] xxs:-top-10 mx-auto absolute top-0 -right-20 xxs:-right-24"  />
                <BottomLeft className="w-[250px] xxs:w-[300px] mx-auto absolute bottom-0 -left-5 xxs:-left-3"  />
            </div>
        </div>

    )
}

export default MainImage