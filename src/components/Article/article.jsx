import ArticleHeader from "../../snippets/article-main/article-header";
import ArticleInfo from "../../snippets/article-main/article-title";
import BlogNewsletter from "../../snippets/article-extras/newsletter";
import ArticleContent from "../../snippets/article-main/article-content";
import BlogBottomSideBar from "../../snippets/article-extras/related";
import BlogRightSideBar from "../../snippets/article-extras/sidebar";
import Footer from "../footer/footer";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './article.css'

import {
  getBlogById,
  getBlogBySection,
} from "../../backend/functions/blogs/getBlogs";
import { useParams } from "react-router-dom";

const Article = () => {
 
  const { state } = useLocation();

  const [headingData, setHeadingData] = useState({
    subject: "",
    subjectLink: "",
    title: "Loading Blog",
    intro: "...",
  });

  const [articleInfo, setArticleInfo] = useState({
    author: "...",
    postDate: Date.now(),
  });

  const [content, setContent] = useState(null);
  
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  // Get the blogId param from the URL.
  let { id } = useParams();

  useEffect(() => {
    function setBlogDataToDefault() {
      setHeadingData({
        subject: "",
        subjectLink: "",
        title: "Loading Blog",
        intro: "...",
      });
      setArticleInfo({
        author: "...",
        postDate: Date.now(),
      });
      setContent(null);
      setRelatedBlogs([]);
    }


    // declare the data fetching function
    const fetchData = async () => {
      let blogData = await getBlogById(id);
      let relatedBlogsHolder = await getBlogBySection(blogData[0]["section"]);

      let {
        imageUrl,
        title,
        createdAt,
        viewCount,
        author,
        summaryContent,
        blogContent,
        section,
      } = blogData[0];

      setRelatedBlogs(relatedBlogsHolder);
      setContent(JSON.parse(blogContent));


      setHeadingData({
        subject: section,
        subjectLink: "",
        title: title,
        intro: summaryContent,
      });

      setArticleInfo({
        author: author,
        postDate: createdAt,
      });
    
    };

    setBlogDataToDefault()
    fetchData().catch(console.error);
    
    return () => {
      // Clean up function
      setBlogDataToDefault()
    };
  }, [id]);
  
  console.log('render')
  

  return (
    <div className="">
      <ArticleHeader headingData={headingData} />

      <div className="xl:flex p-5 md:p-10">
        <article className="xl:border-r border-lightBorder border-opacity-30">
          {/* <ArticleInfo articleInfoData={articleInfo} /> */}
          {content ? (
            <div className="">
              <ArticleContent data={content} /> 
            </div>
          ): <div className="hidden"></div>}
        </article>

        <div className="hidden my-8 px-5 xl:px-10 xl:block p-7 sticky top-6">
          <BlogRightSideBar relatedArticles={relatedBlogs} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Article;
