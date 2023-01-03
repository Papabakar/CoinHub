
const ArticlesRelated = ({ relatedArticles}) => {
    return(
        <div className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Related Articles</h2>
       
        {
            relatedArticles.map((item, index) => {
                const {title, intro, time, image, link} = item

                return(
                    <div className="mb-6 flex items-center">
                        <a href={link} className="shrink-0">
                            <img src={image} className="mr-4 max-w-full w-24 h-24 rounded-lg" alt="Image 3" />
                        </a>
                        <div>
                            <h5 className="mb-2 text-lg font-bold leading-tight dark:text-white text-gray-900">{title}</h5>
                            <p className="mb-2 font-light text-gray-500 dark:text-gray-400">{intro}</p>
                            <a href={link} className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                Read in {time} minutes
                            </a>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default ArticlesRelated