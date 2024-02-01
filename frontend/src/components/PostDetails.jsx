export default ({ post }) => {
  return (
    <li
      post={post}
      key={post._id}
      className="p-5 pb-2 bg-gray-med rounded-md shadow-sm"
    >
      {/* AVATAR & CREATED AT */}
      <div className="flex items-center gap-x-2 mb-5 text-[15px]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          className="w-10 h-10 rounded-full bg-white"
        />
        {post.createdAt}
      </div>
      {/* TITLE & POST */}
      <div className="justify-between sm:flex">
        <div className="flex-1">
          <h3 className="text-xl font-medium text-white">{post.title}</h3>

          <p className="text-white mt-2 pr-2">{post.caption}</p>
        </div>
      </div>
      <div className="flex justify-between">
        {/* LIKE ICON & COUNT */}
        <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
          <span className="flex items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            {post.likes}
          </span>
        </div>

        {/* COMMENT COUNT & ICON */}
        <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
          <span className="flex items-center text-white">
            {post.likes}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          </span>
        </div>
      </div>

      {/* COMMENT */}
      <div className="flex items-center justify-center gap-x-2 border border-transparent rounded-lg pt-4 bg-gray-med">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          className="w-9 h-9 rounded-full bg-white"
        />
        <textarea
          name=""
          id=""
          required="true"
          placeholder="Write an answer..."
          className="rounded-lg bg-gray-light px-4 py-2 text-sm font-medium text-white hover:bg-gray-light-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 w-full text-left h-9 resize-none"
        ></textarea>
      </div>
    </li>
  );
};
