import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, { payload: { comments } }) => {
      state.comments = comments;
    },
  },
});

export const { actions } = commentsSlice;
export default commentsSlice.reducer;
