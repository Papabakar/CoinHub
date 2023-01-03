import ArticleHeader from "../../snippets/article-main/article-header"
import ArticleInfo from "../../snippets/article-main/article-title"
import BlogNewsletter from "../../snippets/article-extras/newsletter"
import ArticleContent from "../../snippets/article-main/article-content"
import BlogBottomSideBar from "../../snippets/article-extras/related"
import BlogRightSideBar from "../../snippets/article-extras/sidebar"

const headingData = 
    {
        subject: "testSubject",
        subjectLink: "testSubjectLink",
        title: "testTitle",
        intro: "testIntro"
    }

const articleInfo = 
    {
        author: "testAuthor",
        postDate: "testDate",
        title: "testTitle",
        intro: "testIntro"
    }


const Article = () => {
    return(
        <div className="">

            <ArticleHeader headingData={headingData} />

                <div className="flex relative z-20 justify-between p-6 -m-36 mx-4 max-w-screen-xl bg-white dark:bg-gray-800 rounded xl:-m-32 xl:p-9 xl:mx-auto">
                    
                    <article className="xl:w-[828px] w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <ArticleInfo articleInfoData={articleInfo}/>
                       <ArticleContent />
                    </article>


                    <BlogRightSideBar />
                </div>

                <BlogBottomSideBar />

            <BlogNewsletter />
        </div>
    )
}

export default Article