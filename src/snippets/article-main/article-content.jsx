import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "@editorjs/header";
import LinkTool from "@editorjs/link";
import ImageTool from "@editorjs/image";
import SimpleImage from "@editorjs/simple-image";
import EditorJS from "@editorjs/editorjs";

let editor;

const ArticleContent = ({ data }) => {
  useEffect(() => {
    editor = new EditorJS({
      holder: "blog",
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
            endpoint:
              "https://coinhub-article-api.onrender.com/get-url-data?hm=f", // Your backend endpoint for url data fetching,
          },
        },

        image: SimpleImage,
      },
      data: data,
      readOnly: true,
    });

    return () => {
      //clean up
    };
  }, []);

  return (
    <>
      <div className="min-h-[800px] text-white flex justify-start items-center">
        {/* {data} */}
        <div id="blog" className="w-[800px]"></div>
      </div>
    </>
  );
};

export default ArticleContent;
