import Header from "@editorjs/header";
import LinkTool from "@editorjs/link";
import ImageTool from "@editorjs/image";
import SimpleImage from "@editorjs/simple-image";
import EditorJS from "@editorjs/editorjs";
import { useEffect } from "react";
import { uploadImageToDB } from "../../firebase";
import addBlog from "../../backend/functions/blogs/addBlog";

const editorConfig = {
  holder: "editor",
  placeholder: "Type something...",
  // autofocus: true,
  tools: {
    header: {
      class: Header,
      config: {
        placeholder: "Enter Title",
        levels: [1, 2, 3, 4],
        shortcut: "CMD+H",
        defaultLevel: 3,
      },
      inlineToolbar: true,
    },
    linkTool: {
      class: LinkTool,
      config: {
        endpoint: "https://coinhub-article-api.onrender.com/get-url-data?hm=f", // Your backend endpoint for url data fetching,
      },
    },

    image: SimpleImage,

    // image: {
    //   class: ImageTool,
    //   config: {
    //     /**
    //      * Custom uploader
    //      */
    //     uploader: {
    //        /**
    //        * Upload file to the server and return an uploaded image data
    //        * @param {File} file - file selected from the device or pasted by drag-n-drop
    //        * @return {Promise.<{success, file: {url}}>}
    //        */
    //       uploadByFile(file) {
    //         return uploadImageToDB(file).then((downloadUrl) => {
    //           return {
    //             success: 1,
    //             file: {
    //               url: downloadUrl,
    //             },
    //           };
    //         });
    //       },
    //     },
    //   },
    // },
  },
  onReady: () => {
    console.log("editor ready");
  },
};

export async function saveEditorData() {
  const outputData = await editorConfig
    .save()
    .catch((error) => {
      console.log("Saving failed:", error);
    });

    console.log(outputData)

    return outputData;
};

export default editorConfig;
