import ArticleHeader from "../../snippets/article-main/article-header";
import ArticleInfo from "../../snippets/article-main/article-title";
import BlogNewsletter from "../../snippets/article-extras/newsletter";
import ArticleContent from "../../snippets/article-main/article-content";
import BlogBottomSideBar from "../../snippets/article-extras/related";
import BlogRightSideBar from "../../snippets/article-extras/sidebar";
import Footer from "../footer/footer";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

let headingData;

let articleInfo;

let content;

const Article = () => {
  const { state } = useLocation();
  let {
    imageUrl,
    title,
    createdAt,
    viewCount,
    author,
    summaryContent,
    blogContent,
    section,
  } = state[0];

  let relatedBlogs = state[1];

  
    content = JSON.parse(blogContent);

    console.log(content);

    headingData = {
      subject: section,
      subjectLink: "",
      title: title,
      intro: summaryContent,
    };

    console.log(headingData);

    articleInfo = {
      author: author,
      postDate: createdAt,
    };

    console.log(articleInfo);

  return (
    <div className="">
      <ArticleHeader headingData={headingData} />

      <div className="flex flex-col xl:flex-row relative">
        <article className=" w-full max-w-none format xl:border-r border-lightBorder border-opacity-30 p-7">
          <ArticleInfo articleInfoData={articleInfo} />
          <ArticleContent data={content} />
        </article>

        <div className="block my-8 px-5 xl:px-10 xl:block p-7 sticky top-6">
          <BlogRightSideBar relatedArticles={relatedBlogs}/>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Article;
