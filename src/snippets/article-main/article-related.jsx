import { useNavigate } from "react-router-dom";

const ArticlesRelated = ({ relatedArticles }) => {
  const navigate = useNavigate();

  function truncate( str, n, useWordBoundary ){
    if (str.length <= n) { return str; }
    const subString = str.slice(0, n-1); // the original check
    return (useWordBoundary 
      ? subString.slice(0, subString.lastIndexOf(" ")) 
      : subString) + "...";
  };

  
  return (
    <div className="mb-12 min-w-[300px]">
      <h2 className="mb-4 text-xl font-bold text-white border-t-[0.1px] border-slate-500 border-opacity-20 pt-4">
        Related Articles
      </h2>

      {relatedArticles.map((item, index) => {
        const { imageUrl, title, _id } = item;
        let truncatedTitle = truncate(title, 35)

        return (
          <div
          key={index}
            onClick={() => {
              navigate(`/blog/${_id}`);
            }}
            className="mb-6 flex items-start cursor-pointer"
          >
            <div className="w-24 h-16 aspect-square mr-3">
            <img
              src={imageUrl}
              className="w-full h-full rounded-lg bg-no-repeat bg-contain bg-center"
              alt="Related-3"
              />
              </div>

            <div>
              <h5 className="mb-2 text-lg font-bold leading-tight text-white">
                {truncatedTitle}
              </h5>
              {/* <p className="mb-2 font-light text-gray-500 dark:text-gray-400">{intro}</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesRelated;
