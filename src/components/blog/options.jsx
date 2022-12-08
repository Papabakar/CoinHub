

const Options = ({data}) => {
    return(
       data.map((item) => {
         const {name, Image, id} = item

        return(
            <div key={id} className="flex items-center justify-center rounded-xl py-5 bg-card-bg p-3.5 gap-2 min-w-[150px]">
                <div className="">
                    <img src={Image} alt="" />
                </div>

                <div className="text-white uppercase text-sm">
                    {name}
                </div>
            </div>
        )
       })
    )
}

export default Options