import ArticlesRelated from "../article-main/article-related"
import AdBlock from "./adblock"

const relatedArticles = [
    {
        title: "Sample title",
        intro: "Sample Intro",
        link: "https://google.com",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png",
        time: "sample time",
    },
    {
        title: "Sample title",
        intro: "Sample Intro",
        link: "https://google.com",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png",
        time: "sample time",
    },
    {
        title: "Sample title",
        intro: "Sample Intro",
        link: "https://google.com",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png",
        time: "sample time",
    },
]

const BlogRightSideBar = () => {
    return(
        <>
        <aside className="hidden xl:block">
            <div className="xl:w-[336px] sticky top-6">
                <ArticlesRelated relatedArticles={relatedArticles} />
                <AdBlock />
            </div>
        </aside>
        </>
    )
}

export default BlogRightSideBar