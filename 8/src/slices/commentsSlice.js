import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { actions as usersActions } from "./usersSlice.js";
import { actions as postsActions } from "./postsSlice.js";

const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState();

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments: commentsAdapter.addMany,
    addComment: commentsAdapter.addOne,
  },
  // BEGIN (write your solution here)
  extraReducers: (builder) => { // Дополнительные редьюсеры
    builder.addCase(postsActions.removePost, (state, action) => {
      const post = action.payload;
      const restEntities = Object.values(state.entities).filter((e) => !post.comments.includes(e.id));
      commentsAdapter.setAll(state, restEntities);
    })
    builder.addCase(usersActions.removeUser, (state, action) => {
      const id = action.payload;
      const restEntities = Object.values(state.entities).filter((e) => e.author !== id);
      commentsAdapter.setAll(state, restEntities);
    })
  }
  // END
});

export const { actions } = commentsSlice;
export const selectors = commentsAdapter.getSelectors(
  (state) => state.comments
);
export default commentsSlice.reducer;
