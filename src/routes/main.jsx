import MainImage from "../components/Main/main-image"
import MainText from "../components/Main/main-text"

const Main = () => {
    return(
        <div className="grid md:mt-20 mx-auto grid-cols-1 xxs:mt-10 gap-16 md:gap-0 px-7 items-center flex-center md:px-10 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <div className="row-start-2 md:row-start-1">
                <MainText />
            </div>
            <MainImage />
        </div>
    )
}

export default Main