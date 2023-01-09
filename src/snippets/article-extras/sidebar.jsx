import ArticlesRelated from "../article-main/article-related"
import AdBlock from "./adblock"

// const relatedArticles = [
//     {
//         title: "Sample title",
//         intro: "Sample Intro",
//         link: "https://google.com",
//         image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png",
//         time: "sample time",
//     },
//     {
//         title: "Sample title",
//         intro: "Sample Intro",
//         link: "https://google.com",
//         image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png",
//         time: "sample time",
//     },
//     {
//         title: "Sample title",
//         intro: "Sample Intro",
//         link: "https://google.com",
//         image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png",
//         time: "sample time",
//     },
// ]

const BlogRightSideBar = ({relatedArticles}) => {
    return(
        <>
        <aside className="">
            <div className="xl:w-[336px] sticky top-8 right-0 h-fit">
                <ArticlesRelated relatedArticles={relatedArticles} />
                <AdBlock />
            </div>
        </aside>
        </>
    )
}

export default BlogRightSideBar