import'./marquee.styles.css'
import { ICONDATA1, ICONDATA2 } from '../../../data/document.data'
import MarqueeBundle from './marquee-bundle'
import { makeId } from '../../../utils/document.utils'

const marqueeData = [
    {
        lineName: 'marquee__line1',
        images: ICONDATA1,
        direction: -1,
        id: makeId()
    },
    {
        lineName: 'marquee__line2',
        images: ICONDATA2,
        direction: 1,
        id: makeId()
    },
    {
        lineName: 'marquee__line3',
        images: ICONDATA1,
        direction: -1,
        id: makeId()
    },
    {
        lineName: 'marquee__line4',
        images: ICONDATA2,
        direction: 1,
        id: makeId()
    },
]

const HeroMarquee = () => {
    return(
        <div className='relative flex min-h-full flex-col gap-[24px] py-[20px]'>
            <div className="marquee-cover-left"></div>
            <div className="marquee-cover-right"></div>
            {
                marqueeData.map((item) => {
                    const {lineName, images, direction, id} = item
                    return(
                        <MarqueeBundle key={id} lineName={lineName} direction={direction} data={images} />
                    )
                })
            }
        </div>
    )
}

export default HeroMarquee
