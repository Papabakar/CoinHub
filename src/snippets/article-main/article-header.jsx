
const ArticleHeader = ( { headingData } ) => {
    // const articleHeader = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/background.png'
    const { subject, intro, title, subjectLink } = headingData
    return(
        <header className="w-full h-[460px] xl:h-[537px] bg-no-repeat bg-cover bg-center bg-blend-darken relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
                <span className="block mb-4 text-gray-300">Published in <a href={subjectLink} className="font-semibold text-white hover:underline">{subject}</a></span>
                <h1 className="mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl">{title}</h1>
                <p className="text-lg font-normal text-gray-300">{intro}</p>
            </div>
        </header>
    )
}

export default ArticleHeader