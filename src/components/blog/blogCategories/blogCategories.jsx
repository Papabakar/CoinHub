
import { makeId } from "../../../utils/document.utils";
import { useContext,  } from "react";
import { BlogContext } from "../../../context/blog.context";
import './blogCategories.css'

const OptionsData = [
    {
        name: "Bitcoin",
        id: makeId(),
    },
    {
        name: "Ethereum",
        id: makeId(),
    },
    {
        name: "Investing",
        id: makeId(),
    },
    {
        name: "Trading",
        id: makeId(),
    },
    {
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
                    OptionsData.map((item, index) => {
                        const { name } = item;
                        return (
                            <div
                            key={index}
                            onClick={() => blogSelecter(name.toLowerCase())}
                            className="bg-card-bg cursor-pointer rounded-xl px-8 py-2.5 "
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