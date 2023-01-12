import { useNavigate } from "react-router-dom";

const ArticlesRelatedLoadingSkeleton = ({ relatedArticles }) => {

  return (
    <div className="mb-12 min-w-[300px]">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Related Articles
      </h2>

      {relatedArticles.map((item, index) => {

        return (
          <div className="mb-6 flex items-start cursor-pointer">
            <div className="w-24 h-24 aspect-square mr-3 animate-pulse bg-gray-500 rounded-md"></div>

            <div className="p-1 text-transparent rounded-md text-sm animate-pulse bg-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesRelatedLoadingSkeleton;
