import { configureStore } from "@reduxjs/toolkit";
import { tasksApi } from './tasksApi.js';

// BEGIN (write your solution here)
const store = configureStore({
    reducer: {
        [tasksApi.reducerPath]: tasksApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tasksApi.middleware),
});

export default store;

// END
