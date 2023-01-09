import { useEffect } from "react"
import { marqueeFunction } from "../../../utils/marquee/marquee";

const IconBox = ({images, lineName, direction, speed, gap}) => {
    useEffect(() => {
      let boxes = ".box";

      marqueeFunction(lineName, boxes, direction, speed, gap)

      return () => marqueeFunction;
    }, [lineName, direction, speed, gap]);

    return(
        <>
            {images.map((item) => {
                const {image, id} = item

                return(
                    <> 
                        <div key={id} className="box flex flex-shrink-0 justify-center items-center aspect-square">
                            <img src={image} className="" alt="" />
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default IconBox