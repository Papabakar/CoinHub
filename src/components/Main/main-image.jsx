
import mainImage from '../../assets/marketsvg-2/main.svg'
import topRight from '../../assets/marketsvg-2/topleft.svg'
import bottomLeft from '../../assets/marketsvg-2/bottomleft.svg'

const MainImage = () => {
    return(
        <div className="mx-auto">
            <div className="relative w-[80%] mx-auto">
                <img src={mainImage} alt="" className=''  />
                <img src={topRight} alt="" className='absolute -top-10 w-[70%] max-w-[180px] -right-10 md:-right-16'/>
                <img src={bottomLeft} alt="" className='absolute -bottom-10 w-[70%] -left-10' />
            </div>
        </div>
    )
}

export default MainImage