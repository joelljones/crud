import { useEffect, useState } from 'react';

import PostDetails from './PostDetails';

const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:3000/api/posts');
      const json = await res.json();

      if (res.ok) {
        setPosts(json);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="w-[500px] m-2">
      <ul className="mt-12 space-y-6">
        {posts &&
          posts.map((post) => <PostDetails post={post} key={post._id} />)}
      </ul>
    </section>
  );
};
export default Posts;
