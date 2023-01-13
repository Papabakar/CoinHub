
import { makeId } from "../../../utils/document.utils"
import IconBox from "./heroMarqueeIcon"

const MarqueeBundle = ({ data, lineName, direction}) => {
    let id = makeId();
    return(
        <div key={id} className={`flex min-w-full gap-[28px] flex-shrink-0 items-center justify-center ${lineName} max-h-[72px]`}>
            <IconBox key={id} images={data} gap={'28px'} speed={0.025} direction={direction} lineName={`.${lineName}`}/>
        </div>
    )
}

export default MarqueeBundle