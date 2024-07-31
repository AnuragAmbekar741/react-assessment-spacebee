import { configureStore } from '@reduxjs/toolkit';
import blogReducer, {BlogsState} from "../slices/blogsSlice"
import paginationReducer, {PaginationState} from "../slices/paginationSlice"

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    pagination:paginationReducer
  },
});

export type RootState = {
  blogs: BlogsState;
  pagination:PaginationState;
};
export type AppDispatch = typeof store.dispatch;

export default store;



