import { useEffect, useState } from 'react';

import PostDetails from './PostDetails';

const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(import.meta.env.VITE_RAILWAY_URL + '/api/posts');
      const json = await res.json();

      if (res.ok) {
        setPosts(json);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section>
      <ul className="space-y-4">
        {posts &&
          posts.map((post) => <PostDetails post={post} key={post._id} />)}
      </ul>
    </section>
  );
};
export default Posts;
