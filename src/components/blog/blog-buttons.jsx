import Bitcoin from "../../assets/icons/bitcoin.png";
import Ether from "../../assets/icons/ether.png";
import Industry from "../../assets/icons/industry.png";
import Investing from "../../assets/icons/investing.png";
import Trading from "../../assets/icons/trading.png";
import { makeId } from "../../utils/document.utils";
import { useContext,  } from "react";
import { BlogContext } from "../../context/blog.context";
import './blog-buttons.css'

const OptionsData = [
    {
        Image: Bitcoin,
        name: "Bitcoin",
        id: makeId(),
    },
    {
        Image: Ether,
        name: "Ethereum",
        id: makeId(),
    },
    {
        Image: Investing,
        name: "Investing",
        id: makeId(),
    },
    {
        Image: Trading,
        name: "Trading",
        id: makeId(),
    },
    {
        Image: Industry,
        name: "Industry",
        id: makeId(),
    },
];


const BlogOptions = () => {

    const { blogSelecter } = useContext(BlogContext)

    return(
        <div className="relative overflow-x-scroll scrollbar-hide">
            <div className="overlay-buttons"></div>
            <div className="flex justify-start md:justify-center items-center gap-2 mt-6 px-4 overflow-x-scroll scrollbar-hide mx-3">
                {
                    OptionsData.map((item) => {
                        const { name, id } = item;
                        return (
                            <div
                            key={id}
                            onClick={() => blogSelecter(name.toLowerCase())}
                            className="bg-card-bg rounded-xl px-8 py-2.5 "
                            >
                    
                            <div className="text-white  text-base">{name}</div>
                            </div>
                            )
                        })}
            </div>
        </div>
    )
} 

export default BlogOptions