import ArticleHeader from "../../snippets/article-main/article-header";
import ArticleInfo from "../../snippets/article-main/article-title";
import BlogNewsletter from "../newsletter/newsletter";
import ArticleContent from "../../snippets/article-main/article-content";
import BlogBottomSideBar from "../../snippets/article-extras/related";
import BlogRightSideBar from "../../snippets/article-extras/sidebar";
import { useLocation, useParams  } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./article.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";

import {
  getBlogById,
  getBlogBySection,
} from "../../backend/functions/blogs/getBlogs";
import { useParams } from "react-router-dom";
import CoinList from "../Coinlist/coin";
import FooterMenu from "../footer/footer";
import deleteBlog from "../../backend/functions/blogs/deleteBlog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import increaseBlogViewCount from "../../backend/functions/blogs/increaseViewCount";
// import SEO from "../SEO/seo";

const Article = () => {
  const { state } = useLocation();
  let { title } = useParams();
  console.log(title)
  const [user, loading, error] = useAuthState(auth);

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

  useEffect(() => {

    window.scrollTo({top: 0, left: 0, behavior: 'auto'});

    // declare the data fetching function
    const fetchData = async () => {
      let blogData = await getBlogById(id);
      console.log(`Blog Data ${blogData}`);
      if (blogData === null || blogData === []) {
        setHeadingData({
          subject: "",
          subjectLink: "",
          title: "This blog does not exist",
          intro: "...",
        });
        setArticleInfo({
          author: "...",
          postDate: Date.now(),
        });
        setContent(null);
        setRelatedBlogs([]);
      } else {
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

        increaseBlogViewCount(id, viewCount); // increasing view count

        setRelatedBlogs(relatedBlogsHolder);
        setContent(JSON.parse(blogContent));

        console.log(content);

        setHeadingData({
          subject: section,
          subjectLink: "",
          title: title,
          intro: summaryContent,
          imageUrl: imageUrl,
        });

        setArticleInfo({
          author: author,
          postDate: createdAt,
        });
      }
    };

    setBlogDataToDefault();
    fetchData().catch(console.error);

    return () => {
      // Clean up function
      setBlogDataToDefault();
    };
  }, [id]);

  function notify(text) {
    toast(text);
  }

  return (
    <div className="">
      <ToastContainer />
      <CoinList />
      {!loading && user ? (
        <div
          onClick={async () => {
            await deleteBlog(id);
            notify("Blog Deleted | Refresh Page");
          }}
          className="fixed bottom-5 hover:scale-105 hover:ease-in-out hover:transition hover:bg-red-700 right-5 bg-red-500 z-[10000] w-fit px-5 py-2 rounded-2xl text-white  cursor-pointer"
        >
          Delete Blog
        </div>
      ) : (
        <div className="hidden"></div>
      )}
      <ArticleHeader headingData={headingData} data={content && content} />

      <div className="flex flex-col md:flex-row bg-primaryBg">
        <article className="md:border-r flex flex-col p-5 md:p-10  gap-5 border-lightBorder border-opacity-30">
          <ArticleInfo articleInfoData={articleInfo} />
          {content ? (
            <div className="">
              <ArticleContent data={content} />
            </div>
          ) : (
            <div className="hidden"></div>
          )}
        </article>

        <div className="md:block p-7 top-6">
          <BlogRightSideBar relatedArticles={relatedBlogs} />
        </div>
      </div>
      <FooterMenu />
    </div>
  );
};

export default Article;
