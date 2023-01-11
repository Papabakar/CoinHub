import { ReactComponent as Calendar } from "../../../assets/icons/calendar.svg";
import { ReactComponent as Eye } from "../../../assets/svgs/eye.svg";

const BlogLoadingSkeleton = () => {
  return ["", "", ""].map((item) => {
    return (
      <div className="bg-card-bg rounded-3xl w-fit relative h-[450px]">
        <div
          className="rounded-t-3xl min-h-[300px] bg-center w-full bg-auto bg-no-repeat"
          style={{
            background:
              "url(https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* <img src={imageUrl} className="bg-cover w-full" alt="" /> */}
        </div>

        <div className="flex flex-col gap-3 p-5 w-fit">
          <h3 className="font-bold text-white text-xl max-w-[30ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            posuere sed urna vel convallis.
          </h3>

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
