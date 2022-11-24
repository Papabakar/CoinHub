import SectionImage from "../components/Intro/section-image"
import SectionText from "../components/Intro/section-text"

const Intro = () => {
    return(
        <div className="grid grid-cols-1 xxs:mt-10 gap-16 md:gap-0 px-7 items-center flex-center md:px-10 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <SectionImage />
            <SectionText />
        </div>
    )
}

export default Intro