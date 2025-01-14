import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Posts from './Posts.jsx';
import routes from '../routes.js';

import { actions as usersActions } from '../slices/usersSlice.js';
import { actions as postsActions } from '../slices/postsSlice.js';
import { actions as commentsActions } from '../slices/commentsSlice.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(routes.getData());
      const {
        users,
        posts,
        comments,
      } = data;

      dispatch(usersActions.setUsers(users));
      dispatch(postsActions.setPosts(posts));
      dispatch(commentsActions.setComments({ comments })); 
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="col-5">
      <Posts />
    </div>
  );
};

export default App;
