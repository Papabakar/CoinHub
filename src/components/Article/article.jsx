import  Logo from '../../assets/svgs/logo.svg'
import { Link } from 'react-router-dom'
import ArticleHeader from "../../snippets/article-main/article-header";
import ArticleInfo from "../../snippets/article-main/article-title";
import BlogNewsletter from "../newsletter/newsletter";
import ArticleContent from "../../snippets/article-main/article-content";
import BlogBottomSideBar from "../../snippets/article-extras/related";
import BlogRightSideBar from "../../snippets/article-extras/sidebar";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./article.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";
import FooterMenu from "../footer/footer";

import {
  getBlogById,
  getBlogBySection,
} from "../../backend/functions/blogs/getBlogs";
import { useParams } from "react-router-dom";
import CoinList from "../Coinlist/coin";
import deleteBlog from "../../backend/functions/blogs/deleteBlog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import increaseBlogViewCount from "../../backend/functions/blogs/increaseViewCount";

const Article = () => {
  const { state } = useLocation();
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

  const [relatedBlogs, setRelatedBlogs] = useState(null);
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
    setRelatedBlogs(null);
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
        setRelatedBlogs(null);
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
          imageUrl: imageUrl
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
      <div className="my-5 mx-auto w-full py-3 logo sticky top-0 z-10 bg-[#0a0b16]">
        <div className='w-fit mx-auto'>
          <Link to="/#home">
            <img src={Logo} className="min-w-[150px]" alt="" />
          </Link >
        </div>
      </div>
      <ToastContainer />
      <CoinList />
      <div className="relative w-full">
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
      <ArticleHeader headingData={headingData} />
      </div>

      <div className="w-full flex flex-col md:flex-row bg-primaryBg">
        <article className="md:border-r flex flex-col p-5 md:p-10 w-full gap-5 border-lightBorder border-opacity-30">
          <ArticleInfo articleInfoData={articleInfo} />
          {content ? (
            <div className="h-full w-full">
              <ArticleContent data={content} />
            </div>
          ) : (
            <div className="h-full w-full animate-pulse min-h-[800px] bg-gray-500 rounded-md text-gray-300"></div>
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
