import Bitcoin from "../../assets/icons/bitcoin.png";
import Ether from "../../assets/icons/ether.png";
import Industry from "../../assets/icons/industry.png";
import Investing from "../../assets/icons/investing.png";
import Trading from "../../assets/icons/trading.png";
import { makeId } from "../../utils/document.utils";
import { useContext, useState } from "react";
import { BlogContext } from "../../context/blog.context";

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
        OptionsData.map((item) => {
        const { name, Image, id } = item;
        return (
            <div
            key={id}
            onClick={() => blogSelecter(name.toLowerCase())}
            className="flex items-center justify-center rounded-xl py-3 bg-card-bg mt-3.5 gap-2 px-7 hover:cursor-pointer ml-3"
            >

        <div className="text-white  text-base">{name}</div>
        </div>
    )})
    )
} 

export default BlogOptions