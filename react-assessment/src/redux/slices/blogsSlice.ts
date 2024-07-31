import {createSlice,createAsyncThunk,PayloadAction} from "@reduxjs/toolkit"
import { Blog } from "../../types"
import { fetchData } from "../../utils/general"
import { AxiosResponse } from "axios"

export interface BlogsState {
    blogs: Blog[]
    loading:boolean
    error:string|null
}

const initialState:BlogsState={
    blogs:[],
    loading:false,
    error:null
}

export const fetchBlogs = createAsyncThunk<Blog[], void, { rejectValue: string }>(
  'blogs/fetchBlogs',
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Blog[]> = await fetchData('/api/v1/news');
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue('Failed to fetch blogs');
    }
  }
);


const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action: PayloadAction<Blog[]>) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default blogSlice.reducer;