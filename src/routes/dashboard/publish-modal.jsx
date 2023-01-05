
import React, { useEffect, useState } from "react";
import addBlog from "../../backend/functions/blogs/addBlog";
import { saveEditorData } from "../../components/EditorDashboard/editor.configuration";
import FormInput from "../../snippets/form-input";

const PublishModal = () => {

    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [author, setAuthor] = useState("");
    const [section, setSection] = useState("");

    async function publishBlog() {
        const editorData = saveEditorData();
        const editorDataToString = JSON.stringify(editorData);
        try {
          await addBlog({
            title: title,
            imageUrl: imgUrl,
            viewCount: 0,
            author: author,
            summaryContent: "",
            blogContent: editorDataToString,
            section: section,
          });
    
          console.log("Blog Uploaded");
        } catch (error) {
          console.log(error);
        }
    }

    return(
    <div className="p-7 sm:min-w-[400px] border hidden border-lightBorder fixed min-w-[320px] xs:min-w-[375px] top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 z-[100] rounded-2xl backdrop-blur-3xl border-opacity-30 flex flex-col gap-5">
        <div className="text-gray-400 flex flex-col gap-1">
            <span className="text-white font-bold text-2xl">Confirm Details</span>
            <span>Please confirm the blog title, author, header image and section.</span> 
        </div>

        <div className="flex flex-col gap-2">
                <input
                    type="text"
                    className=" bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Blog Title"
                />
                <input
                    type="text"
                    className=" bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                />
                <input
                    type="text"
                    className=" bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    placeholder="https://imageurl.com/"
                />
                <input
                    type="text"
                    className=" bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    placeholder="Blog Section"
                />
        </div>

        <button className="primary w-full text-white py-3">
            Publish
        </button>
    </div>
    )
}

export default PublishModal