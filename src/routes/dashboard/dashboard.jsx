import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import addBlog from "../../backend/functions/blogs/addBlog";
import Editor from "../../components/EditorDashboard/editor";

import { auth, logout } from "../../firebase";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [section, setSection] = useState("");
  const [summaryContent, setSummaryContent] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const navigate = useNavigate();


  async function prepareDataAndCreateBlog() {
    try {
      await addBlog({
        title: title,
        imageUrl: imgUrl,
        viewCount: 0,
        author: author,
        summaryContent: summaryContent,
        blogContent: blogContent,
        section: section,
      });

      console.log("Blog Uploaded");
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading]);

  return (
    <div className="bg-main-bg min-h-screen">
      {loading ? (
        <div className="text-lg ">VERIFYING AUTHENTICATION</div>
      ) : (
        // <div>
        //   <div className="text-lg text-white">THIS IS THE DASHBOARD</div>
        //   <div className="flex justify-center items-center">
        //     <div className="flex flex-col text-center bg-[#dcdcdc] p-[30px]">
        //       <input
        //         type="text"
        //         className="p-[10px] text-md mb-2"
        //         value={title}
        //         onChange={(e) => setTitle(e.target.value)}
        //         placeholder="Blog Title"
        //       />
        //       <input
        //         type="text"
        //         className="p-[10px] text-md mb-2"
        //         value={author}
        //         onChange={(e) => setAuthor(e.target.value)}
        //         placeholder="Author"
        //       />
        //       <input
        //         type="text"
        //         className="p-[10px] text-md mb-2"
        //         value={section}
        //         onChange={(e) => setSection(e.target.value)}
        //         placeholder="Blog Section"
        //       />
        //       <input
        //         type="text"
        //         className="p-[10px] text-md mb-2"
        //         value={imgUrl}
        //         onChange={(e) => setImgUrl(e.target.value)}
        //         placeholder="Image URL"
        //       />
        //       <input
        //         type="text"
        //         className="p-[10px] text-md mb-2"
        //         value={summaryContent}
        //         onChange={(e) => setSummaryContent(e.target.value)}
        //         placeholder="Blog Summary"
        //       />
        //       <input
        //         type="text"
        //         className="p-[10px] text-md mb-2"
        //         value={blogContent}
        //         onChange={(e) => setBlogContent(e.target.value)}
        //         placeholder="Blog Text"
        //       />
        //       <button
        //         className="p-[10px] text-md mb-2 border-none bg-black text-white"
        //         onClick={() => prepareDataAndCreateBlog()}
        //       >
        //         ADD BLOG
        //       </button>

        //       <button
        //         className="p-[10px] text-md mb-2 border-none bg-red-500 text-white"
        //         onClick={() => logout()}
        //       >
        //         Logout
        //       </button>
        //     </div>
        //   </div>
        // </div>
        <Editor />
        // <div className=""></div>
      )}
    </div>
  );
}

export default Dashboard;
