import NewsMarquee from "../components/news-marquee/news-marquee";
import { NEWSSLIDERDATA } from "../data/document.data";

const NewsSlider = () => {
    return(
        <div className="md:my-16 my-10 flex flex-col gap-[20px] items-center justify-center">
            <NewsMarquee data={NEWSSLIDERDATA} sliderLine={".snippetLine"} sliderBox={".snippetBox"} direction={1} speed={0.25} gap={20} />
        </div>
    )
}

export default NewsSlider