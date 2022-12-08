import Lottie from 'react-lottie';
import FormInput from '../form-input/form-input';
import { useState } from 'react';

import animationData from '../../assets/lottie/127832-heart-vibes.json'

const Footer = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };

    const defaultFormField = {
        email: '',
    }

    const [formfield, setFormfield] = useState(defaultFormField)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormfield({...formfield, [name]:value})
    }

    const { email } = formfield
  
      
    return(
        <div className="px-10 border-t border-lightBorder border-opacity-30 ">
            <div className="grid grid-cols-4 grid-rows-1 my-10">
                <div className="flex flex-col items-start justify-start w-full gap-5">
                    <div className="flex flex-col gap-2">
                        <span className='text-white text-sm'>Get crypto news everyday!</span>
                        <form action="w-full">
                        <FormInput  inputOptions={
                            {
                                name: 'email',
                                type: 'text',
                                value: email,
                                onChange: handleChange
                            }
                        } 
                        />
                        </form>
                    </div>
              
                    <div className="">
                        <span className='text-white text-sm'>Follow Our Socials</span>

                    </div>
                </div>

            </div>

            <div className="text-gray-400 flex w-full mt-10 xl:mt-0 items-center flex-col md:flex-row md:justify-between border-t border-lightBorder border-opacity-30 px-5 p-4 pb-3 text-sm md:text-md 2xl:text-base text-darkgray bg-main-bg gap-1.5">
                <span>2022 StoicDAO © | All Rights Reserved</span>

                <div className="">
                    <div className='flex'>Created with 
                    <div className="flex justify-center mt-auto 2xl:pt-0.5">
                        <Lottie options={defaultOptions} height={22.5} className="" width={22.5}/>
                    </div>
                    by<a className='ml-1 font-bold text-white text-opacity-70 hover:text-opacity-100 hover:transition-[400ms] hover:ease-in-out hover:scale-[101%] italic' href="https://t.me/webdevmiles" rel='noreferrer' target={'_blank'}> SukkoStudio</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer