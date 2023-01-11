
import React, { useEffect, useState } from "react";

const PublishModal = ({publishBlog}) => {

    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [author, setAuthor] = useState("");
    const [section, setSection] = useState("");
    const [intro, setIntro] = useState("");

    return(
    <div className="p-7 sm:min-w-[400px] border border-lightBorder fixed min-w-[320px] xs:min-w-[375px] top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 z-[100] rounded-2xl backdrop-blur-3xl border-opacity-30 flex flex-col gap-5">
        <div className="text-gray-400 flex flex-col gap-1">
            <span className="text-white font-bold text-2xl">Confirm Details</span>
            <span>Please confirm the blog title, author, header image, short intro and section.</span> 
        </div>

        <form className="flex flex-col gap-2">
                

                <div className="flex flex-col mt-4">
                    <label className="text-gray-200 text-sm ml-1.5 mb-1 flex gap-0.5 relative">
                        <span className="text-red-500 absolute -left-1.5 -top-0.5">*</span>
                        Blog Title
                    </label>
                    <input
                        required
                        type="text"
                        className="focus:placeholder:opacity-0 bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                </div>

                <div className="flex flex-col mt-4">
                    <label className="text-gray-200 text-sm ml-1.5 mb-1 flex gap-0.5 relative">
                        <span className="text-red-500 absolute -left-1.5 -top-0.5">*</span>
                        Author
                    </label>
                    <input
                        required
                        type="text"
                        className="focus:placeholder:opacity-0 bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="CoinhubCC.."
                    />
                </div>
                

                <div className="flex flex-col mt-4">
                    <label className="text-gray-200 text-sm ml-1.5 mb-1 flex gap-0.5 relative">
                        <span className="text-red-500 absolute -left-1.5 -top-0.5">*</span>
                    Cover Image (URL)
                    </label>
                    <input
                        required
                        type="text"
                        className="focus:placeholder:opacity-0 bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3"
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                        placeholder="https://imageurl.com/"
                    />
                </div>
                
                <div className="flex flex-col mt-4">
                    <label className="text-gray-200 text-sm ml-1.5 mb-1 flex gap-0.5 relative">
                        <span className="text-red-500 absolute -left-1.5 -top-0.5">*</span>
                        Short Summary/Intro
                    </label>
                    <input
                        required
                        type="text"
                        className="focus:placeholder:opacity-0 bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3"
                        value={intro}
                        onChange={(e) => setIntro(e.target.value)}
                        placeholder="Short Summary/Intro"
                    />
                </div>
                
                <div className="flex flex-col mt-4">
                <label className="text-gray-200 text-sm ml-1.5 mb-1 flex gap-0.5 relative">
                    <span className="text-red-500 absolute -left-1.5 -top-0.5">*</span>
                    Read Time (mins)
                </label>
                <input
                    required
                    type="number"
                    className="focus:placeholder:opacity-0 appearence-none bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3"
                    value=""
                    // onChange={(e) => setIntro(e.target.value)}
                    placeholder="2"
                />
                </div>
                {/* <input
                    type="text"
                    className=" bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    placeholder="Blog Section"
                /> */}
                <div className="flex flex-col mt-4">
                    <label className="text-gray-200 text-sm ml-1.5 mb-1 flex gap-0.5 relative">
                        <span className="text-red-500 absolute -left-1.5 -top-0.5">*</span>
                        Blog Section
                    </label>
                    <select name="" required className="appearence-none bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3" id="">
                        <option value={section}>Bitcoin</option>
                        <option value={section}>Ethereum</option>
                        <option value={section}>Investing</option>
                        <option value={section}>Trading</option>
                        <option value={section}>Industry</option>
                    </select>
                </div>
        </form>

        <button onClick={() => publishBlog(title, imgUrl, author, intro, section.toLowerCase())} className="primary w-full text-white py-3">
            Publish
        </button>
    </div>
    )
}

export default PublishModal