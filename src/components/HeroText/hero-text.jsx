import './hero-text.style.css'

const HeroText = () => {
    return(
        <div className="flex px-5 flex-col gap-5 items-center w-full justify-center text-center max-w-[80ch] mx-auto">
            <div className="flex flex-col gap-0 items-center w-full justify-center">
                <span className="textGradient text-xs md:text-sm">incididunt ut labore et dolore </span>
                <h1 className="font-bold text-4xl md:text-5xl text-white">Lorem ipsum dolor sit ametconse.</h1>
            </div>
            <p className="text-gray-500">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
    )
}

export default HeroText