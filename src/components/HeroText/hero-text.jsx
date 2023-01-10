import './hero-text.style.css'

const HeroText = () => {
    return(
        <div id='#about' className="flex px-5 my-16 flex-col gap-5 items-center w-full justify-center text-center max-w-[80ch] mx-auto">
            <div className="flex flex-col gap-0 items-center w-full justify-center">
                <span className="textGradient text-xs md:text-sm">Stay Ahead of the curve</span>
                <h1 className="font-bold text-4xl md:text-5xl text-white first-letter:uppercase">Real-time Crypto News Source</h1>
            </div>
            <p className="text-gray-500">CoinHub is the fastest real-time crypto news source covering cryptocurrency, Bitcoin, Ethereum, Defi and more.</p>
        </div>
    )
}

export default HeroText