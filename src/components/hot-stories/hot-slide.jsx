import "./hot-slide.style.scss";
import moment from "moment";

const SlideHot = ({ data }) => {
  const { imageUrl, title, viewCount, createdAt } = data;

  return (
    <div
      style={{ background: `url(${imageUrl})` }}
      className="bg-center background-image bg-no-repeat rounded-[25px] min-w-[384px] h-[500px] flex flex-col justify-between p-5 w-[384px]"
    >
      <div className="flex justify-between items-center">
        <div className="flex time-pill items-center pl-1.5 justify-start gap-1 p-0.5 px-3  rounded-full">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00033 15.1667C4.50699 15.1667 1.66699 12.3267 1.66699 8.83333C1.66699 5.34 4.50699 2.5 8.00033 2.5C11.4937 2.5 14.3337 5.34 14.3337 8.83333C14.3337 12.3267 11.4937 15.1667 8.00033 15.1667ZM8.00033 3.5C5.06033 3.5 2.66699 5.89333 2.66699 8.83333C2.66699 11.7733 5.06033 14.1667 8.00033 14.1667C10.9403 14.1667 13.3337 11.7733 13.3337 8.83333C13.3337 5.89333 10.9403 3.5 8.00033 3.5Z"
              fill="white"
            />
            <path
              d="M8 9.16683C7.72667 9.16683 7.5 8.94016 7.5 8.66683V5.3335C7.5 5.06016 7.72667 4.8335 8 4.8335C8.27333 4.8335 8.5 5.06016 8.5 5.3335V8.66683C8.5 8.94016 8.27333 9.16683 8 9.16683Z"
              fill="white"
            />
            <path
              d="M10 1.8335H6C5.72667 1.8335 5.5 1.60683 5.5 1.3335C5.5 1.06016 5.72667 0.833496 6 0.833496H10C10.2733 0.833496 10.5 1.06016 10.5 1.3335C10.5 1.60683 10.2733 1.8335 10 1.8335Z"
              fill="white"
            />
          </svg>

          <span className="text-sm">
            {moment(new Date(createdAt)).fromNow()}
          </span>
        </div>

        <div className="flex  mt-0.5 text-xs p-1 my-auto rounded-full px-2 view-pill justify-between gap-1.5 items-center bg-opacity-25">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3866 8.14276C10.3866 9.33705 9.31995 10.3021 7.99995 10.3021C6.67995 10.3021 5.61328 9.33705 5.61328 8.14276C5.61328 6.94848 6.67995 5.9834 7.99995 5.9834C9.31995 5.9834 10.3866 6.94848 10.3866 8.14276Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.9999 13.131C10.3532 13.131 12.5466 11.8764 14.0732 9.70494C14.6732 8.85447 14.6732 7.42494 14.0732 6.57447C12.5466 4.40304 10.3532 3.14844 7.9999 3.14844C5.64656 3.14844 3.45323 4.40304 1.92656 6.57447C1.32656 7.42494 1.32656 8.85447 1.92656 9.70494C3.45323 11.8764 5.64656 13.131 7.9999 13.131Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>{viewCount}</span>
        </div>
      </div>

      <div className="p-4 view-pill rounded-2xl font-medium text-lg">
        {title}
      </div>
    </div>
  );
};

export default SlideHot;
