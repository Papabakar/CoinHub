import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Calendar } from '../../assets/icons/calendar.svg'
import { ReactComponent as Eye } from '../../assets/icons/eye.svg'

function BlogPost({ data }) {
  const navigate = useNavigate();

  return data.map((item) => {
    const { imageUrl, title, createdAt, viewCount, _id } = item;

    function truncate( str, n, useWordBoundary ){
      if (str.length <= n) { return str; }
      const subString = str.slice(0, n-1); // the original check
      return (useWordBoundary 
        ? subString.slice(0, subString.lastIndexOf(" ")) 
        : subString) + "..";
    };

    let truncatedTitle = truncate(title, 60)

    console.log(title)

    return (
      <div
        className="bg-card-bg rounded-3xl w-fit"
        onClick={() => {
          navigate(`/blog/${_id}`, { state: [item, data] });
        }}
      >
        <div className="rounded-t-3xl min-h-[300px] bg-center w-full bg-auto bg-no-repeat" style={{background: `url(${imageUrl})`}}>
          {/* <img src={imageUrl} className="bg-cover w-full" alt="" /> */}
        </div>

        <div className="flex flex-col gap-3 p-5 w-fit">
          <h3 className="font-bold text-white text-xl max-w-[30ch]">{truncatedTitle}</h3>

          <div className="text-gray-500 max-h-[100px] text-sm flex justify-between">
            <div className="flex gap-1 items-center">
              <Calendar />
              {format(new Date(createdAt), "yyyy-MM-dd")}
            </div>

            <div className="flex items-center gap-1">
              <Eye />
              {viewCount.toLocaleString("en-US")}
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default BlogPost;
