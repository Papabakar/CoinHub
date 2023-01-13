import { useEffect } from "react"
import { marqueeFunction } from "../../../utils/marquee/marquee";
import React from 'react'
import { makeId } from "../../../utils/document.utils";

const IconBox = ({images, lineName, direction, speed, gap, index}) => {
    useEffect(() => {
      let boxes = ".box";

      marqueeFunction(lineName, boxes, direction, speed, gap)

      return () => marqueeFunction;
    }, [lineName, direction, speed, gap]);

    let id = makeId();
    
    return(
        <React.Fragment key={id}>
            {images.map((item, index) => {
                const {image} = item

                return(
                    <> 
                        <div key={id} className="box flex flex-shrink-0 justify-center items-center aspect-square">
                            <img src={image} className="" alt="" />
                        </div>
                    </>
                )
            })}
        </React.Fragment>
    )
}

export default IconBox