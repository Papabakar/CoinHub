import React, {useState} from 'react'
import { useParams, useLocation } from "react-router-dom";

function BlogDisplay() {
    
    const {state} = useLocation();
    let {imageUrl, title, createdAt, viewCount, author, summaryContent, blogContent} = state;

  return (
    <div className='text-white'>
            <p>BLOG TITLE: {title}</p>
            <p>BLOG IMG URL: {imageUrl}</p>
            <p>BLOG VIEW COUNT: {viewCount}</p>
            <p>BLOG AUTHOR: {author}</p>
            <p>BLOG SUMMARY: {summaryContent}</p>
            <p>BLOG FULL TEXT/ CONTENT: {blogContent}</p>
    </div>
  )
}

export default BlogDisplay