import "./hot-slide.style.scss";
import {ReactComponent as Clock} from '../../assets/svgs/clock.svg'
import {ReactComponent as Eye} from '../../assets/svgs/eye.svg'

const HotStory = ({ data }) => {
  const { imageUrl, title, viewCount, createdAt, readTime } = data;

  return (
    <div style={{ background: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} className="xl:opacity-75 hover:transition-[350ms] hover:ease-in-out xl:hover:opacity-100 bg-center background-image bg-no-repeat rounded-[25px] max-w-[400px] min-w-[200px] aspect-[384/500] flex flex-col justify-between p-2.5 xxs:p-3.5 xs:p-5">
        <div className="flex justify-between items-center">
          <div className="flex time-pill items-center pl-1.5 justify-start gap-1 p-0.5 px-3 rounded-full">
            <Clock />

            <span className="text-sm text-white">
              {readTime} mins
            </span>
          </div>

          <div className="flex  mt-0.5 text-xs p-1 my-auto rounded-full px-2 view-pill justify-between gap-1.5 text-white items-center bg-opacity-25">
            <Eye />
            <span>{viewCount.toLocaleString("en-US")}</span>
          </div>
        </div>

        <div className="p-4 view-pill text-white rounded-2xl font-medium text-lg">
        {title}
      </div>
    </div>
    );
};

export default HotStory;


    // <div
    //   style={{ background: `url(${imageUrl})` }}
    //   className="bg-center background-image bg-no-repeat rounded-[25px] aspect-[384/500] flex flex-col justify-between p-5 "
    // >
    //   <div className="flex justify-between items-center">
    //     <div className="flex time-pill items-center pl-1.5 justify-start gap-1 p-0.5 px-3  rounded-full">
          

    //       <span className="text-sm">
    //         {readTime} mins
    //       </span>
    //     </div>

    //     <div className="flex  mt-0.5 text-xs p-1 my-auto rounded-full px-2 view-pill justify-between gap-1.5 items-center bg-opacity-25">
    // //       <svg
    //         width="16"
    //         height="16"
    //         viewBox="0 0 16 16"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M10.3866 8.14276C10.3866 9.33705 9.31995 10.3021 7.99995 10.3021C6.67995 10.3021 5.61328 9.33705 5.61328 8.14276C5.61328 6.94848 6.67995 5.9834 7.99995 5.9834C9.31995 5.9834 10.3866 6.94848 10.3866 8.14276Z"
    //           stroke="white"
    //           stokeLinecap="round"
    //           stokeLinejoin="round"
    //         />
    //         <path
    //           d="M7.9999 13.131C10.3532 13.131 12.5466 11.8764 14.0732 9.70494C14.6732 8.85447 14.6732 7.42494 14.0732 6.57447C12.5466 4.40304 10.3532 3.14844 7.9999 3.14844C5.64656 3.14844 3.45323 4.40304 1.92656 6.57447C1.32656 7.42494 1.32656 8.85447 1.92656 9.70494C3.45323 11.8764 5.64656 13.131 7.9999 13.131Z"
    //           stroke="white"
    //           stokeLinecap="round"
    //           stokeLinejoin="round"
    //         />
    //       </svg>

    //       <span>{viewCount.toLocaleString("en-US")}</span>
    //     </div>
    //   </div>

    //   <div className="p-4 view-pill rounded-2xl font-medium text-lg">
    //     {title}
    //   </div>
    // </div>