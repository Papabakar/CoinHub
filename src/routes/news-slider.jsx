import NewsMarquee from "../components/news-marquee/news-marquee";
import { NEWSSLIDERDATA } from "../data/document.data";

const NewsSlider = () => {
    return(
        <div className="md:my-16 my-10 flex flex-col gap-[20px] items-center justify-center">
        <NewsMarquee data={NEWSSLIDERDATA} sliderLine={"snippetLine"} sliderBox={"snippetBox"} direction={1} speed={0.1} gap={20} />
        <NewsMarquee data={NEWSSLIDERDATA} sliderLine={"snippetLine_2"} sliderBox={"snippetBox_2"} direction={-1} speed={0.1} gap={20} />
        </div>
    )
}

export default NewsSlider