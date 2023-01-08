import ArticleHeader from "../../snippets/article-main/article-header";
import ArticleInfo from "../../snippets/article-main/article-title";
import BlogNewsletter from "../../snippets/article-extras/newsletter";
import ArticleContent from "../../snippets/article-main/article-content";
import BlogBottomSideBar from "../../snippets/article-extras/related";
import BlogRightSideBar from "../../snippets/article-extras/sidebar";
import Footer from "../footer/footer";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
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

      console.log(content);

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
  }, [id]);

  return (
    <div className="">
      <ArticleHeader headingData={headingData} />

      <div className="flex flex-col xl:flex-row relative">
        <article className=" w-full max-w-none format xl:border-r border-lightBorder border-opacity-30 p-7">
          <ArticleInfo articleInfoData={articleInfo} />
          {content ? <ArticleContent data={content} /> : <div className="hidden"></div>}
        </article>

        <div className="block my-8 px-5 xl:px-10 xl:block p-7 sticky top-6">
          <BlogRightSideBar relatedArticles={relatedBlogs} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Article;
