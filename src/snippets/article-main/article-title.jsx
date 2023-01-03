
const ArticleInfo = ({ articleInfoData }) => {

    const { author, postDate } = articleInfoData

    return(
        <div className="flex items-center w-full justify-between space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 lg:mb-0">
            <span>By {author}</span>
            <span>
                <time className="font-normal text-gray-500 dark:text-gray-400" pubdate="true"  dateTime={postDate} title="August 3rd, 2022">{postDate}</time>
            </span>
        </div>
    )
}

export default ArticleInfo