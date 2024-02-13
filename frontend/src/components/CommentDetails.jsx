import Avatar from './Avatar';
import CommentMenu from './CommentMenu';

// date-fns
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

export default ({ post, comment }) => {
  return (
    <li comment={comment}>
      <div className="flex items-center text-[15px]">
        {/* AVATAR */}
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          className="w-8 h-8 rounded-full bg-white mr-1.5"
        /> */}
        <div className="w-8 h-8 mr-1.5 flex justify-center">
          <Avatar />
        </div>

        {/* COMMENT */}
        <div className="justify-between flex bg-gray-light rounded-xl w-full py-2 px-3 mr-1">
          <p className="text-gray-light-txt pr-2">{comment.text}</p>
          {/* <img src="" alt="" /> */}
        </div>

        {/* EDIT / DELETE MENU */}
        <CommentMenu post={post} comment={comment} />
      </div>

      <span className="ml-12 text-xs">
        {formatDistanceToNowStrict(new Date(comment.createdAt))}
      </span>
    </li>
  );
};
