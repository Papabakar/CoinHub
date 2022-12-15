const HotSlideLoadingSkeleton = () => {
  return ["", "", ""].map((item) => {
    return (
      <div className="bg-card-bg rounded-[25px] min-w-[384px] h-[500px] flex flex-col justify-between items-end p-5 w-[384px] animate-pulse">
        <div className="p-4 w-full bg-gray-300 h-8 view-pill rounded-2xl font-medium text-lg"></div>
      </div>
    );
  });
};

export default HotSlideLoadingSkeleton;
