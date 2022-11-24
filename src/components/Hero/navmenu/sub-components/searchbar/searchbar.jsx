
const SearchBar = () => {
    return (
        <form action="">
            <div className="relative">
                
                <div className="absolute left-3.5 items-center text-secondaryTxt flex gap-1 top-1/2 -translate-y-1/2">
                    <i className='bx bx-search-alt-2'></i>
                </div>
                <div className="absolute md:left-5 right-5 items-center text-secondaryTxt flex gap-1 top-1/2 -translate-y-1/2">
                    <label className="text-sm " htmlFor="search">Search</label>
                </div>

                <input className="appearence-none outline-none px-3.5 max-w-[125px] md:max-w-none py-2 rounded-full bg-card-bg text-secondaryTxt" type="text" name="search" id="search" title="search"/>
            </div>
        </form>
    )
}

export default SearchBar
