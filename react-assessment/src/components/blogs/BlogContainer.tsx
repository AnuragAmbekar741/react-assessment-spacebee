import React, { useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/slices/blogsSlice";
import { RootState, AppDispatch } from "../../redux/store";
import { unwrapResult } from "@reduxjs/toolkit";
import BlogCard from "./BlogCards";
import BlogCardSkeleton from "./BlogCardSkeleton";

interface BlogContainerProps {}

const BlogContainer: React.FC<BlogContainerProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector((state: RootState) => state.blogs);
  const page = useSelector((state: RootState) => state.pagination.page);

  const startIndex = (page - 1) * 5;
  const paginatedBlogs = blogs.blogs.slice(startIndex, startIndex + 5);

  const containerRef = useRef<HTMLDivElement>(null);

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
  }, [handleFetchBlogs, blogs.blogs.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  return (
    <div ref={containerRef} className="w-full flex flex-col">
      {blogs &&
        !blogs.loading &&
        blogs.blogs.length > 0 &&
        paginatedBlogs.map((blog) => {
          return <BlogCard {...blog} key={blog.title} />;
        })}
      {blogs.loading && <BlogCardSkeleton />}
    </div>
  );
};

export default BlogContainer;
