import React, { useEffect, useCallback, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/slices/blogsSlice";
import { RootState, AppDispatch } from "../../redux/store";
import { unwrapResult } from "@reduxjs/toolkit";
import BlogCard from "./BlogCards";
import { CircularProgress } from "@mui/material";
import { getFilterEleCount } from "../../redux/slices/fliterSlice";
import Filter from "./filters/Filter";
import { AuthorFilter, CategoryFilter, SortBy } from "../../utils/constant";

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
        if (
          selectedSortBy[0].id === "date" &&
          selectedSortBy[0].type === "sortBy-asc"
        ) {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        if (
          selectedSortBy[0].id === "date" &&
          selectedSortBy[0].type === "sortBy-dsc"
        ) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        if (
          selectedSortBy[0].id === "title" &&
          selectedSortBy[0].type === "sortBy-asc"
        ) {
          return a.title.localeCompare(b.title);
        }
        if (
          selectedSortBy[0].id === "title" &&
          selectedSortBy[0].type === "sortBy-dsc"
        ) {
          return b.title.localeCompare(a.title);
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
    <>
      <div className="grid w-full pt-10 pb-5 md:hidden">
        <div className="flex w-full justify-between border rounded-lg p-3">
          <Filter filterOption={CategoryFilter} title="Category" />
          <Filter filterOption={AuthorFilter} title="Author" />
          <Filter filterOption={SortBy} title="Sort" />
        </div>
      </div>
      <div ref={containerRef} className="w-full flex flex-col">
        {blogs &&
          !blogs.loading &&
          paginatedBlogs.length > 0 &&
          paginatedBlogs.map((blog) => {
            return <BlogCard {...blog} key={blog.title} />;
          })}
        {paginatedBlogs.length === 0 && (
          <div className="text-lg font-light text-red-500">
            Blogs not available as per the applied filters !
          </div>
        )}
        {blogs.loading && (
          <div className="w-full flex items-center justify-center m-60">
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
};

export default BlogContainer;
