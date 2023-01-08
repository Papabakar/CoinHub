import { useNavigate } from "react-router-dom";

const ArticlesRelated = ({ relatedArticles }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-12">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Related Articles
      </h2>

      {relatedArticles.map((item, index) => {
        const { imageUrl, title, _id } = item;

        return (
          <div
            onClick={() => {
              navigate(`/blog/${_id}`);
            }}
            className="mb-6 flex items-center cursor-pointer"
          >
            <img
              src={imageUrl}
              className="mr-4 max-w-full w-24 h-24 rounded-lg"
              alt="Image 3"
            />

            <div>
              <h5 className="mb-2 text-lg font-bold leading-tight text-white">
                {title}
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
