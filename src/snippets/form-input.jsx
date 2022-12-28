
// const FormInput = () => {
//     return(
//         <div>
//         <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
//         <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Add title here" required="" />
//         </div>
//     )
// }

// export default FormInput

const FormInput = ({inputOptions, label}) => {

    return(
        <div className="relative">
            <input {...inputOptions} className={`${inputOptions.value.length ? `border border-gray-300 ` : `border`} bg-transparent text-gray-400 border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3`} />
            <label className={`${inputOptions.value.length ? `top-0 text-xs px-2 left-0 bg-main-bg after:content-['*'] after:text-red-500 after:ml-1  transition-all ease-in-out text-gray-100` : `top-1/2 left-3 text-xs` } -translate-y-1/2  absolute text-gray-500 `}>{`${inputOptions.value.length ? `Email:` : `Enter your e-mail`}`}</label>
        </div> 
    )
}

export default FormInput