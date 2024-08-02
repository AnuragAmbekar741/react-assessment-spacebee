import React from "react";
import Filter from "./Filter";
import { AuthorFilter, CategoryFilter, SortBy } from "../../../utils/constant";

interface FilterContainerProps {}

const FilterContainer: React.FC<FilterContainerProps> = () => {
  return (
    <div className="w-full flex flex-col items-start gap-8 px-3 py-5 border rounded-md h-fit">
      <Filter title="Category" filterOption={CategoryFilter} />
      <Filter title="Author" filterOption={AuthorFilter} />
      <Filter title="Sort" filterOption={SortBy} isSortBy />
    </div>
  );
};

export default FilterContainer;
