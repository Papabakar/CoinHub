import Options from "./options"
import Bitcoin from '../../assets/icons/bitcoin.png'
import Ether from '../../assets/icons/ether.png'
import Industry from '../../assets/icons/industry.png'
import Investing from '../../assets/icons/investing.png'
import Trading from '../../assets/icons/trading.png'
import { makeId } from "../../utils/document.utils"
import BlogPost from "./blog-post"
import { BLOGDATA } from "../../data/document.data"

const OptionsData = [
    {
        Image: Bitcoin,
        name: 'Bitcoin',
        id: makeId()
    },
    {
        Image: Ether,
        name: 'Etherium',
        id: makeId()
    },
    {
        Image: Investing,
        name: 'Investing',
        id: makeId()
    },
    {
        Image: Trading,
        name: 'Trading',
        id: makeId()
    },
    {
        Image: Industry,
        name: 'Industry',
        id: makeId()
    },
]
const BlogsData = [
    {

    }
]

const Blog = () => {
    return(
        <div className="mt-20">
            <div className="flex flex-col gap-3 mx-auto text-center items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <span className="textGradient text-xs">incididunt ut labore et dolore</span>
                    <h2 className="text-5xl text-white font-bold">Discover Blog</h2>
                </div>

                <p className="text-gray-500 max-w-[70ch]">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            
            <div className="w-full flex mt-10 gap-3 items-center justify-center flex-shrink-0 flex-1">
                <Options data={OptionsData} />
            </div>
            <div className="flex justify-center items-center">
            <div className="grid grid-rows-1 p-5 md:p-10 justify-center items-center md:grid-cols-2 xl:grid-cols-3 md:grid-rows-2 gap-7 mt-10 mx-auto">

                <BlogPost data={BLOGDATA} />
            </div>
            </div>

        </div>

    )
}

export default Blog