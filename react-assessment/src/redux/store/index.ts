import { configureStore } from '@reduxjs/toolkit';
import blogReducer, {BlogsState} from "../slices/blogsSlice"
import paginationReducer, {PaginationState} from "../slices/paginationSlice"
import filterReducer, {FiltersState} from "../slices/fliterSlice"

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    pagination:paginationReducer,
    filter:filterReducer
  },
});

export type RootState = {
  blogs: BlogsState;
  pagination:PaginationState;
  filter:FiltersState
};
export type AppDispatch = typeof store.dispatch;

export default store;



