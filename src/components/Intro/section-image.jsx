
import mainImage from '../../assets/marketsvg/main.svg'
import topRight from '../../assets/marketsvg/topright.svg'
import bottomRight from '../../assets/marketsvg/bottomright.svg'
import bottomLeft from '../../assets/marketsvg/bottomleft.svg'
import './section.style.css'

const SectionImage = () => {
    return(
        <div className="mx-auto">
            <div className="relative w-[80%] mx-auto">
                <img src={mainImage} alt="" className=''  />
                <img src={topRight} alt="" className='absolute -top-10 w-[70%] -right-10 md:-right-16'/>
                <img src={bottomRight} alt="" className='absolute -bottom-14 w-[70%] -right-14' />
                <img src={bottomLeft} alt="" className='absolute -bottom-10 w-[70%] -left-10' />
            </div>
        </div>
    )
}

export default SectionImage