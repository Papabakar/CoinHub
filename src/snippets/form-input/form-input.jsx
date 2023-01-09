const FormInput = ({inputOptions, label}) => {

    return(
        <div className="relative">
            <input {...inputOptions} className={`${inputOptions.value.length ? `border border-gray-300 ` : `border`} bg-transparent text-gray-400 border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3`} />
            <label className={`${inputOptions.value.length ? `top-0 text-xs px-2 left-0 bg-main-bg after:content-['*'] after:text-red-500 after:ml-1  transition-all ease-in-out text-gray-100` : `top-1/2 left-3 text-xs` } -translate-y-1/2  absolute text-gray-500 `}>{`${inputOptions.value.length ? `Email:` : `Enter your e-mail`}`}</label>
        </div> 
    )
}

export default FormInput