
import BlogPost from "./blogBlock";
import { useState, useEffect, useContext } from "react";
import { getBlogBySection } from "../../backend/functions/blogs/getBlogs";
import BlogLoadingSkeleton from "./blogSkeleton/blog-loading-skeleton";
import BlogOptions from "./blogCategories/blogCategories";
import { BlogContext } from "../../context/blog.context";

//format of blog data coming from DB:
// {
//     "_id": "639374412db53b69fad22ca8",
//     "title": "Test By OLA 2",
//     "imageUrl": "hmm",
//     "viewCount": 20345,
//     "createdAt": "2022-12-09T17:45:37.226Z",
//     "updatedAt": "2022-12-09T17:45:37.226Z",
//     "__v": 0
// },


let BlogsData = [];

const Blog = () => {
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  const { selectedBlogSection } = useContext(BlogContext)

  useEffect(() => {
    //Runs only when the selectedBlogSection changes

    const fetchBlogs = async () => {
      if (!loadingBlogs) {
        setLoadingBlogs(true);
      }
      BlogsData = await getBlogBySection(selectedBlogSection);
      setLoadingBlogs(false);
    };

    fetchBlogs().catch(console.error);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBlogSection]);

  return (
    <div className="mt-20">
      <div className="flex flex-col gap-3 mx-auto text-center items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <span className="textGradient text-xs">
            incididunt ut labore et dolore
          </span>
          <h2 className="text-5xl text-white font-bold">Discover Blog</h2>
        </div>

        <p className="text-gray-500 max-w-[70ch]">
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.{" "}
        </p>
      </div>

      <BlogOptions />
      
      <div className="flex justify-center items-center">
        {loadingBlogs ? (
          <div className={`grid grid-rows-1 p-5 md:p-10 justify-center items-center md:grid-cols-2 xl:grid-cols-3 ${ BlogsData.length <= 2 ? `md:grid-rows-1`:`md:grid-rows-1` } gap-7 mt-5 mx-auto`}>
            <BlogLoadingSkeleton />
          </div>
        ) : (
          <div>
            {BlogsData.length === 0 ? (
              <p className="text-white  mt-10 px-10 text-md text-center md:text-base">This category is empty! We will be adding blogs soon.</p>
            ) : (
              <div className={`grid grid-rows-1 p-5 md:p-10 justify-center items-center md:grid-cols-2 base:grid-cols-3 xl:grid-cols-3 ${ BlogsData.length <= 2 ? `md:grid-rows-1`:`md:grid-rows-1` } gap-7 mt-5 mx-auto`}>
                <BlogPost data={BlogsData} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
