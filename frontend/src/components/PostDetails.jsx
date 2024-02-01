export default ({ post }) => {
  return (
    <li
      post={post}
      key={post._id}
      className="p-5 pb-2 bg-gray-med rounded-md shadow-sm"
    >
      {/* AVATAR,USERNAME & CREATED AT */}
      <div className="flex items-center gap-x-2 text-[15px] text-gray-med-txt">
        {/* AVATAR */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          className="w-10 h-10 rounded-full bg-white"
        />

        {/* USERNAME & CREATED AT */}
        <div className="flex flex-col">
          {/* <span>Username</span> */}
          {post.createdAt}
        </div>
      </div>

      {/* POST & IMAGE */}
      <div className="justify-between sm:flex p-4">
        <div className="flex-1">
          <p className="text-gray-light-txt pr-2">{post.caption}</p>
          {/* <img src="" alt="" /> */}
        </div>
      </div>

      {/* LIKE & COMMENT COUNT */}
      <div className="flex justify-between pb-2 border-b border-gray-light text-gray-med-txt">
        {/* LIKE ICON & COUNT */}
        <div className="items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path d="M1 8.25a1.25 1.25 0 1 1 2.5 0v7.5a1.25 1.25 0 1 1-2.5 0v-7.5ZM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0 1 14 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 0 1-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 0 1-1.341-.317l-2.734-1.366A3 3 0 0 0 6.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 0 1 2.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388Z" />
            </svg>
            {post.likes}
          </span>
        </div>

        {/* COMMENT COUNT & ICON */}
        <div className="items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
          <span className="flex items-center">
            {post.comments}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                fillRule="evenodd"
                d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 0 1-1.504-.123 5.976 5.976 0 0 1-3.935 1.107.75.75 0 0 1-.584-1.143 3.478 3.478 0 0 0 .522-1.756C2.979 13.825 2 12.025 2 10Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* ADD LIKE &/OR COMMENT */}
      <div className="flex border-b border-gray-light text-gray-med-txt">
        {/* LIKE */}
        <button className="flex gap-2 bg-transparent w-1/2 justify-center hover:bg-gray-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            />
          </svg>
          <span>Like</span>
        </button>

        {/* COMMENT */}
        <button className="flex gap-2 bg-transparent w-1/2 justify-center hover:bg-gray-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
          <span>Comment</span>
        </button>
      </div>

      {/* CREATE COMMENT */}
      <div className="flex items-center justify-center gap-x-2 border border-transparent rounded-lg bg-gray-med mt-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          className="w-9 h-9 rounded-full bg-white"
        />
        <textarea
          name=""
          id=""
          required="true"
          placeholder="Write a comment..."
          className="rounded-full bg-gray-light px-4 py-2 text-sm font-medium text-gray-med-txt hover:bg-gray-light-hvr focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 w-full text-left h-9 resize-none"
        ></textarea>
      </div>
    </li>
  );
};
