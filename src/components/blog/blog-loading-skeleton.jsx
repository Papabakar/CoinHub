const BlogLoadingSkeleton = () => {
  return ["", "", "", "", "", ""].map((item) => {
    return (
      <div className="bg-card-bg rounded-2xl w-fit animate-pulse">
        <div className="h-[357px] w-[385px]"></div>

        <div className="flex flex-col gap-3 p-5 w-fit">
          <div className="flex flex-col space-y-3">
            <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
            <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
          </div>
        </div>
      </div>
    );
  });
};

export default BlogLoadingSkeleton;
