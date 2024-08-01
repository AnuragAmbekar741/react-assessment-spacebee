import React, { useEffect, useCallback, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/slices/blogsSlice";
import { RootState, AppDispatch } from "../../redux/store";
import { unwrapResult } from "@reduxjs/toolkit";
import BlogCard from "./BlogCards";
import BlogCardSkeleton from "./BlogCardSkeleton";
import { getFilterEleCount } from "../../redux/slices/fliterSlice";

interface BlogContainerProps {}

const BlogContainer: React.FC<BlogContainerProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector((state: RootState) => state.blogs);
  const page = useSelector((state: RootState) => state.pagination.page);

  const selectedCategories = useSelector(
    (state: RootState) => state.filter.categories
  );
  const selectedAuthors = useSelector(
    (state: RootState) => state.filter.authors
  );
  const selectedSortBy = useSelector((state: RootState) => state.filter.sortBy);
  console.log(selectedSortBy);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFetchBlogs = useCallback(async () => {
    try {
      const blogsResp = await dispatch(fetchBlogs());
      const unwrapBlogsResp = unwrapResult(blogsResp);
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

  const filteredBlogs = useMemo(() => {
    let filtered = [...blogs.blogs];
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((blog) =>
        selectedCategories.some((category) =>
          blog.source.includes(category.title)
        )
      );
    }
    if (selectedAuthors.length > 0) {
      filtered = filtered.filter((blog) =>
        selectedAuthors.some((author) => blog.author === author.title)
      );
    }
    if (selectedSortBy.length > 0) {
      filtered.sort((a, b) => {
        if (selectedSortBy[0].id === "date") {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        if (selectedSortBy[0].id === "title") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    }
    dispatch(getFilterEleCount(filtered.length));
    return filtered;
  }, [blogs.blogs, selectedCategories, selectedAuthors, selectedSortBy]);

  //pagination
  const startIndex = (page - 1) * 5;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + 5);

  return (
    <div ref={containerRef} className="w-full flex flex-col">
      {blogs &&
        !blogs.loading &&
        paginatedBlogs.length > 0 &&
        paginatedBlogs.map((blog) => {
          return <BlogCard {...blog} key={blog.title} />;
        })}
      {paginatedBlogs.length === 0 && <div>No blogs</div>}
      {blogs.loading && <BlogCardSkeleton />}
    </div>
  );
};

export default BlogContainer;
