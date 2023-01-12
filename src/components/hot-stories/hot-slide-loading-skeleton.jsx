import "./hot-slide.style.scss";
import { ReactComponent as Clock } from "../../assets/svgs/clock.svg";
import { ReactComponent as Eye } from "../../assets/svgs/eye.svg";

const HotSlideLoadingSkeleton = () => {
  return (
    <div className="xl:opacity-75 hover:transition-[350ms] hover:ease-in-out xl:hover:opacity-100 bg-center background-image bg-no-repeat rounded-[25px] max-w-[400px] min-w-[200px] aspect-[384/500] flex flex-col justify-between p-2.5 xxs:p-3.5 xs:p-5 animate-pulse bg-gray-700">
      <div className="flex justify-between items-center">
        <div className="flex time-pill items-center pl-1.5 justify-start gap-1 p-0.5 px-3 rounded-full">
          <Clock />

          <span className="text-sm text-white">? mins</span>
        </div>

        <div className="flex  mt-0.5 text-xs p-1 my-auto rounded-full px-2 view-pill justify-between gap-1.5 text-white items-center bg-opacity-25">
          <Eye />
          <span>?</span>
        </div>
      </div>

      <div className="p-4 text-transparent rounded-2xl font-medium text-lg animate-pulse bg-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
};

export default HotSlideLoadingSkeleton;
