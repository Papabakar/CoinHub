import SectionImage from "../components/Intro/section-image"
import SectionText from "../components/Intro/section-text"

const Intro = () => {
    return(
        <div id="introSection" className="grid max-w-[2000px] mx-auto grid-cols-1 mb-10 gap-16 md:gap-0 px-7 items-center flex-center md:px-10 base:grid-cols-2 base:grid-rows-1">
            <SectionImage />
            <SectionText />
        </div>
    )
}

export default Intro