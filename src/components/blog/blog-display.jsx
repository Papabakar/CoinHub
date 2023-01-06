import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "@editorjs/header";
import LinkTool from "@editorjs/link";
import ImageTool from "@editorjs/image";
import SimpleImage from "@editorjs/simple-image";
import EditorJS from "@editorjs/editorjs";

function BlogDisplay() {
  const { state } = useLocation();
  let {
    imageUrl,
    title,
    createdAt,
    viewCount,
    author,
    summaryContent,
    blogContent,
  } = state;

  let blogContentToJSON = JSON.parse(blogContent);

  let editor = new EditorJS({
    holder: "editor2",
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
          endpoint:
            "https://coinhub-article-api.onrender.com/get-url-data?hm=f", // Your backend endpoint for url data fetching,
        },
      },

      image: SimpleImage,
    },
    data: blogContentToJSON,
    readOnly: true,
    onReady: () => {
      console.log("editor ready");
    },
  });

  return (
    <div className="text-white">
      <p>BLOG TITLE: {title}</p>
      <p>BLOG IMG URL: {imageUrl}</p>
      <p>BLOG VIEW COUNT: {viewCount}</p>
      <p>BLOG AUTHOR: {author}</p>
      <p>BLOG SUMMARY: {summaryContent}</p>
      <div id='editor2' className=""></div>
    </div>
  );
}

export default BlogDisplay;
