
import IconBox from "./iconbox"

const MarqueeBundle = ({ data, lineName, direction }) => {
    return(
        <div className={`flex min-w-full gap-[28px] flex-shrink-0 items-center justify-center ${lineName} max-h-[72px]`}>
            <IconBox images={data} gap={'28px'}  speed={0.025} direction={direction} lineName={`.` + `${lineName}`}/>
        </div>
    )
}

export default MarqueeBundle