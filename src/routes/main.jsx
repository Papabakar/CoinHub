import MainImage from "../components/Main/main-image"
import MainText from "../components/Main/main-text"

const Main = () => {
    return(
        <div className="grid base:mt-20 mx-auto grid-cols-1 xxs:mt-10 gap-16 base:gap-0 px-7 items-center flex-center base:px-10 grid-rows-2 base:grid-cols-2 base:grid-rows-1">
            <div className="row-start-2 base:row-start-1">
                <MainText />
            </div>
            <MainImage />
        </div>
    )
}

export default Main