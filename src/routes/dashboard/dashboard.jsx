import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import addBlog from "../../backend/functions/blogs/addBlog";
import Editor, {
  saveEditorData,
} from "../../components/EditorDashboard/editor";

import { auth, logout } from "../../firebase";
import PublishModal from "./publish-modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  function notify(text) {

    toast(text);

  }

  async function publishBlog(title, imgUrl, author, intro, section) {
    const editorData = await saveEditorData();
    const editorDataToString = JSON.stringify(editorData);
    try {
      await addBlog({
        title: title,
        imageUrl: imgUrl,
        viewCount: 0,
        author: author,
        summaryContent: intro,
        blogContent: editorDataToString,
        section: section,
      });

      notify("Blog Uploaded");
    } catch (error) {

      notify("Blog Could Not Be Uploaded");
      console.log(error);
    }
  }

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading]);

  return (
    <div className="bg-main-bg min-h-screen ">
      {loading ? (
        <div className="text-lg ">VERIFYING AUTHENTICATION</div>
      ) : (
        <div className="flex flex-col justify-start items-start">
          <ToastContainer />
          {showModal ? (
            <PublishModal
              setShowModal={setShowModal}
              publishBlog={(title, imgUrl, author, intro, section) =>
                publishBlog(title, imgUrl, author, intro, section)
              }
            />
          ) : (
            ""
          )}

<div className="mb-12">
          <Editor />
          </div>

          <div className="fixed bottom-5 right-5 w-fit">
            <button
              onClick={() => {
                setShowModal((prevShowModal) => !prevShowModal);
              }}
              className="text-white primary-setting  text-xl flex"
            >
              <i className={showModal ? "bx bx-undo" : "bx bxs-send"}></i>
            </button>
          </div>

          <div className="fixed bottom-5 left-5">
            <button className="primary text-white" onClick={() => logout()}>
              Logout
            </button>
          </div>

          
        </div>
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

        //     </div>
        //   </div>
        // </div>

        // <div className=""></div>
      )}
    </div>
  );
}

export default Dashboard;
