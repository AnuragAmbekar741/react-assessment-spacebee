import { configureStore } from '@reduxjs/toolkit';
import blogReducer, {BlogsStateProps} from "../slices/blogsSlice"

const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

export type RootState = {
  blogs: BlogsStateProps;
};
export type AppDispatch = typeof store.dispatch;

export default store;



