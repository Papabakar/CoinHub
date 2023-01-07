
const ArticlesRelated = ({ relatedArticles}) => {
    return(
        <div className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Related Articles</h2>
       
        {
            relatedArticles.map((item, index) => {
                const {imageUrl, title} = item

                return(
                    <div className="mb-6 flex items-center">
                        <a href="" className="shrink-0">
                            <img src={imageUrl} className="mr-4 max-w-full w-24 h-24 rounded-lg" alt="Image 3" />
                        </a>
                        <div>
                            <h5 className="mb-2 text-lg font-bold leading-tight text-white">{title}</h5>
                            {/* <p className="mb-2 font-light text-gray-500 dark:text-gray-400">{intro}</p> */}
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default ArticlesRelated