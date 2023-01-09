
import './newsletter.style.scss'
import NewsletterImage from '../../assets/images/newsletter.png'

const Newsletter = () => {
    return(
        <div className="flex mx-auto ">
            <div className="newsletter  md:w-[95vw] w-[100vw] xl:rounded-3xl max-w-[1600px]">
                <div className=" 2xl:max-w-[1500px] max-w-[95%] mx-auto w-full mt-20 md:mt-0 pt-10 p-6  flex flex-col-reverse base:flex-row items-center xl:items-start justify-between relative">
                    <div className="flex flex-col gap-5 mt-10 ">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-white font-bold text-4xl max-w-[30ch]">Our Newsletter</h2>
                            <p className="text-gray-500 max-w-[70ch]">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>

                        <div className="">
                            <button className="primary">
                                <span className=''>Subscribe Now</span>
                            </button>
                        </div>
                    </div>

                    <div className="max-w-[400px] xl:absolute xl:right-5 xl:top-0 xl:bottom-0">
                        <img src={NewsletterImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter