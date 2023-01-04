import ArticleHeader from "../../snippets/article-main/article-header"
import ArticleInfo from "../../snippets/article-main/article-title"
import BlogNewsletter from "../../snippets/article-extras/newsletter"
import ArticleContent from "../../snippets/article-main/article-content"
import BlogBottomSideBar from "../../snippets/article-extras/related"
import BlogRightSideBar from "../../snippets/article-extras/sidebar"
import Footer from "../footer/footer"

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
            
                <div className="flex flex-col xl:flex-row relative">

                    <article className=" w-full max-w-none border-b format xl:border-r border-lightBorder border-opacity-30 p-7">
                        <ArticleInfo articleInfoData={articleInfo}/>
                        <ArticleContent />
                    </article>

                    <div className="block my-8 px-5 xl:px-10 xl:block p-7 sticky top-6">
                        <BlogRightSideBar />
                    </div>
                </div>

                <Footer />
        </div>
    )
}

export default Article