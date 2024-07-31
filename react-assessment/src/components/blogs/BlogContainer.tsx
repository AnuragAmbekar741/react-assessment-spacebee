import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/slices/blogsSlice";
import { RootState, AppDispatch } from "../../redux/store";
import { unwrapResult } from "@reduxjs/toolkit";
import BlogCard from "./BlogCards";

interface BlogContainerProps {}

const BlogContainer: React.FC<BlogContainerProps> = () => {
  const blogs = useSelector((state: RootState) => state.blogs);
  const dispatch = useDispatch<AppDispatch>();

  const handleFetchBlogs = useCallback(async () => {
    try {
      const blogsResp = await dispatch(fetchBlogs());
      const unwrapBlogsResp = unwrapResult(blogsResp);
      console.log(unwrapBlogsResp);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!blogs.blogs.length) {
      handleFetchBlogs();
    }
  }, [handleFetchBlogs]);

  return (
    <div className="w-full flex flex-col">
      {blogs &&
        !blogs.loading &&
        blogs.blogs.length > 0 &&
        blogs.blogs.map((blog) => {
          return <BlogCard {...blog} key={blog.title} />;
        })}
    </div>
  );
};

export default BlogContainer;
