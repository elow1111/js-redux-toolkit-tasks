import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post.jsx';

const Posts = () => {
  const { ids, entities } = useSelector((state) => state.postsReducer);

  return (
    <div className="mt-3">
      {ids.map((id) => (
        <Post key={id} post={entities[id]} />
      ))}
    </div>
  );
};

export default Posts;
