import { ReactComponent as Calendar } from "../../../assets/icons/calendar.svg";
import { ReactComponent as Eye } from "../../../assets/svgs/eye.svg";

const BlogLoadingSkeleton = () => {
  return ["", "", ""].map((item, index) => {
    return (
      <div key={index} className="bg-card-bg rounded-3xl w-fit relative h-[450px]">
        <div className="rounded-t-3xl min-h-[300px] bg-center w-full bg-auto bg-no-repeat animate-pulse bg-gray-700"></div>

        <div className="flex flex-col gap-3 p-5 w-fit">
          <div className="animate-pulse bg-gray-700 rounded-lg">
            <h3 className="font-bold text-transparent text-xl max-w-[30ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
          </div>

          <div className="text-gray-500 max-h-[100px] absolute bottom-4 left-5 right-5 text-sm flex justify-between">
            <div className="flex gap-1 items-center">
              <Calendar />
              <span>2023-?-?</span>
            </div>

            <div className="flex items-center gap-1 ">
              <Eye />?
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default BlogLoadingSkeleton;
