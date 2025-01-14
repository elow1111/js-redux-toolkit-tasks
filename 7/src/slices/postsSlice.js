import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// BEGIN (write your solution here)
const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState();

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: postsAdapter.addOne,
        addPosts: postsAdapter.addMany,
        updatePost: postsAdapter.updateOne
    }
    }
);
export const selectors = postsAdapter.getSelectors((state) => state.posts) ;
export const { actions } = postsSlice;
export default postsSlice.reducer;
// END
