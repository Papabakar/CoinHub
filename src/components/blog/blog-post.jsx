import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function BlogPost({ data }) {
  const navigate = useNavigate();

  return data.map((item) => {
    const { imageUrl, title, createdAt, viewCount, _id } = item;

    return (
      <div
        className="bg-card-bg rounded-3xl w-fit"
        onClick={() => {
          navigate(`/blog/${_id}`, { state: item });
        }}
      >
        <div className="">
          <img src={imageUrl} className="bg-cover w-full" alt="" />
        </div>

        <div className="flex flex-col gap-3 p-5 w-fit">
          <h3 className="font-bold text-white text-xl max-w-[30ch]">{title}</h3>

          <div className="text-gray-500 text-sm flex justify-between">
            <div className="flex gap-1 items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.3335 3.83325C5.06016 3.83325 4.8335 3.60659 4.8335 3.33325V1.33325C4.8335 1.05992 5.06016 0.833252 5.3335 0.833252C5.60683 0.833252 5.8335 1.05992 5.8335 1.33325V3.33325C5.8335 3.60659 5.60683 3.83325 5.3335 3.83325Z"
                  fill="#84858A"
                />
                <path
                  d="M10.6665 3.83325C10.3932 3.83325 10.1665 3.60659 10.1665 3.33325V1.33325C10.1665 1.05992 10.3932 0.833252 10.6665 0.833252C10.9398 0.833252 11.1665 1.05992 11.1665 1.33325V3.33325C11.1665 3.60659 10.9398 3.83325 10.6665 3.83325Z"
                  fill="#84858A"
                />
                <path
                  d="M5.66667 9.66655C5.58 9.66655 5.49333 9.64656 5.41333 9.61322C5.32667 9.57989 5.26 9.53321 5.19333 9.47321C5.07333 9.34654 5 9.17988 5 8.99988C5 8.91322 5.02 8.82655 5.05333 8.74655C5.08667 8.66655 5.13333 8.59322 5.19333 8.52655C5.26 8.46655 5.32667 8.41987 5.41333 8.38654C5.65333 8.28654 5.95333 8.33989 6.14 8.52655C6.26 8.65322 6.33333 8.82655 6.33333 8.99988C6.33333 9.03988 6.32667 9.08656 6.32 9.13322C6.31333 9.17322 6.3 9.21322 6.28 9.25322C6.26667 9.29322 6.24667 9.33321 6.22 9.37321C6.2 9.40655 6.16667 9.43988 6.14 9.47321C6.01333 9.59321 5.84 9.66655 5.66667 9.66655Z"
                  fill="#84858A"
                />
                <path
                  d="M8.00016 9.66658C7.9135 9.66658 7.82683 9.64659 7.74683 9.61326C7.66016 9.57992 7.5935 9.53324 7.52683 9.47324C7.40683 9.34658 7.3335 9.17992 7.3335 8.99992C7.3335 8.91325 7.3535 8.82658 7.38683 8.74658C7.42016 8.66658 7.46683 8.59325 7.52683 8.52659C7.5935 8.46659 7.66016 8.41991 7.74683 8.38657C7.98683 8.27991 8.28683 8.33992 8.4735 8.52659C8.5935 8.65325 8.66683 8.82658 8.66683 8.99992C8.66683 9.03992 8.66016 9.08659 8.6535 9.13326C8.64683 9.17326 8.6335 9.21325 8.6135 9.25325C8.60016 9.29325 8.58016 9.33325 8.5535 9.37325C8.5335 9.40658 8.50016 9.43991 8.4735 9.47324C8.34683 9.59324 8.1735 9.66658 8.00016 9.66658Z"
                  fill="#84858A"
                />
                <path
                  d="M10.3332 9.66658C10.2465 9.66658 10.1598 9.64659 10.0798 9.61326C9.99317 9.57992 9.9265 9.53324 9.85984 9.47324C9.83317 9.43991 9.8065 9.40658 9.77984 9.37325C9.75317 9.33325 9.73317 9.29325 9.71984 9.25325C9.69984 9.21325 9.6865 9.17326 9.67984 9.13326C9.67317 9.08659 9.6665 9.03992 9.6665 8.99992C9.6665 8.82658 9.73984 8.65325 9.85984 8.52659C9.9265 8.46659 9.99317 8.41991 10.0798 8.38657C10.3265 8.27991 10.6198 8.33992 10.8065 8.52659C10.9265 8.65325 10.9998 8.82658 10.9998 8.99992C10.9998 9.03992 10.9932 9.08659 10.9865 9.13326C10.9798 9.17326 10.9665 9.21325 10.9465 9.25325C10.9332 9.29325 10.9132 9.33325 10.8865 9.37325C10.8665 9.40658 10.8332 9.43991 10.8065 9.47324C10.6798 9.59324 10.5065 9.66658 10.3332 9.66658Z"
                  fill="#84858A"
                />
                <path
                  d="M5.66667 12C5.58 12 5.49333 11.9801 5.41333 11.9467C5.33333 11.9134 5.26 11.8667 5.19333 11.8067C5.07333 11.68 5 11.5067 5 11.3334C5 11.2467 5.02 11.16 5.05333 11.08C5.08667 10.9934 5.13333 10.92 5.19333 10.86C5.44 10.6134 5.89333 10.6134 6.14 10.86C6.26 10.9867 6.33333 11.16 6.33333 11.3334C6.33333 11.5067 6.26 11.68 6.14 11.8067C6.01333 11.9267 5.84 12 5.66667 12Z"
                  fill="#84858A"
                />
                <path
                  d="M8.00016 12C7.82683 12 7.6535 11.9267 7.52683 11.8067C7.40683 11.68 7.3335 11.5067 7.3335 11.3334C7.3335 11.2467 7.3535 11.16 7.38683 11.08C7.42016 10.9934 7.46683 10.92 7.52683 10.86C7.7735 10.6134 8.22683 10.6134 8.4735 10.86C8.5335 10.92 8.58016 10.9934 8.6135 11.08C8.64683 11.16 8.66683 11.2467 8.66683 11.3334C8.66683 11.5067 8.5935 11.68 8.4735 11.8067C8.34683 11.9267 8.1735 12 8.00016 12Z"
                  fill="#84858A"
                />
                <path
                  d="M10.3332 11.9999C10.1598 11.9999 9.9865 11.9266 9.85984 11.8066C9.79984 11.7466 9.75317 11.6733 9.71984 11.5866C9.68651 11.5066 9.6665 11.4199 9.6665 11.3333C9.6665 11.2466 9.68651 11.1599 9.71984 11.0799C9.75317 10.9933 9.79984 10.9199 9.85984 10.8599C10.0132 10.7066 10.2465 10.6333 10.4598 10.6799C10.5065 10.6866 10.5465 10.6999 10.5865 10.7199C10.6265 10.7333 10.6665 10.7533 10.7065 10.78C10.7398 10.8 10.7732 10.8333 10.8065 10.8599C10.9265 10.9866 10.9998 11.1599 10.9998 11.3333C10.9998 11.5066 10.9265 11.6799 10.8065 11.8066C10.6798 11.9266 10.5065 11.9999 10.3332 11.9999Z"
                  fill="#84858A"
                />
                <path
                  d="M13.6668 6.56006H2.3335C2.06016 6.56006 1.8335 6.33339 1.8335 6.06006C1.8335 5.78673 2.06016 5.56006 2.3335 5.56006H13.6668C13.9402 5.56006 14.1668 5.78673 14.1668 6.06006C14.1668 6.33339 13.9402 6.56006 13.6668 6.56006Z"
                  fill="#84858A"
                />
                <path
                  d="M10.6667 15.1666H5.33333C2.9 15.1666 1.5 13.7666 1.5 11.3333V5.66659C1.5 3.23325 2.9 1.83325 5.33333 1.83325H10.6667C13.1 1.83325 14.5 3.23325 14.5 5.66659V11.3333C14.5 13.7666 13.1 15.1666 10.6667 15.1666ZM5.33333 2.83325C3.42667 2.83325 2.5 3.75992 2.5 5.66659V11.3333C2.5 13.2399 3.42667 14.1666 5.33333 14.1666H10.6667C12.5733 14.1666 13.5 13.2399 13.5 11.3333V5.66659C13.5 3.75992 12.5733 2.83325 10.6667 2.83325H5.33333Z"
                  fill="#84858A"
                />
              </svg>

              {format(new Date(createdAt), "yyyy-MM-dd")}
            </div>

            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3866 7.99995C10.3866 9.31995 9.31995 10.3866 7.99995 10.3866C6.67995 10.3866 5.61328 9.31995 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C9.31995 5.61328 10.3866 6.67995 10.3866 7.99995Z"
                  stroke="#84858A"
                  stokeLinecap="round"
                  stokeLinejoin="round"
                />
                <path
                  d="M7.9999 13.5133C10.3532 13.5133 12.5466 12.1266 14.0732 9.72665C14.6732 8.78665 14.6732 7.20665 14.0732 6.26665C12.5466 3.86665 10.3532 2.47998 7.9999 2.47998C5.64656 2.47998 3.45323 3.86665 1.92656 6.26665C1.32656 7.20665 1.32656 8.78665 1.92656 9.72665C3.45323 12.1266 5.64656 13.5133 7.9999 13.5133Z"
                  stroke="#84858A"
                  stokeLinecap="round"
                  stokeLinejoin="round"
                />
              </svg>

              {viewCount.toLocaleString("en-US")}
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default BlogPost;
