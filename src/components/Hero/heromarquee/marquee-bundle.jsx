
import IconBox from "./iconbox"

const MarqueeBundle = ({ data, lineName, direction }) => {
    return(
        <div className={`flex min-w-full gap-[16px] flex-shrink-0 items-center justify-center ${lineName} max-h-[72px]`}>
            <IconBox images={data} speed={0.05} gap={'16px'} direction={direction} lineName={`.` + `${lineName}`}/>
            <IconBox images={data} gap={'16px'}  speed={0.025} direction={direction} lineName={`.` + `${lineName}`}/>
        </div>
    )
}

export default MarqueeBundle