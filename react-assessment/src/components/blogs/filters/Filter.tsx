import React, { useState } from "react";
import { FilterOptions } from "../../../utils/constant";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  toggleCategoryFilter,
  toggleAuthorFilter,
  toggleSortBy,
  removeFilter,
} from "../../../redux/slices/fliterSlice";

interface FilterProps {
  title: string;
  filterOption: FilterOptions[];
  isSortBy?: boolean;
}

const Filter: React.FC<FilterProps> = ({
  title,
  filterOption,
  isSortBy = false,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isAsc, setIsAsc] = useState<boolean>(true);
  const handleCheckboxChange = (filter: FilterOptions, isChecked: boolean) => {
    if (isChecked) {
      if (filter.type === "category") {
        dispatch(toggleCategoryFilter(filter));
      } else if (filter.type === "author") {
        dispatch(toggleAuthorFilter(filter));
      } else if (filter.type === "sortBy") {
        const filterToDispatch = {
          ...filter,
          type: isAsc ? "sortBy-asc" : "sortBy-dsc",
        };
        dispatch(toggleSortBy(filterToDispatch));
      }
    } else {
      dispatch(removeFilter(filter));
    }
  };

  return (
    <div className="flex flex-col w-full gap-4 mx-3  md:mx-0">
      <div className={`flex justify-between py-2 px-4 bg-gray-100  rounded-md`}>
        <p className="text-md font-medium text-slate-800">{title}</p>
        {isSortBy && (
          <>
            {isAsc ? (
              <ArrowUpwardIcon
                onClick={() => setIsAsc(false)}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <ArrowDownwardIcon
                onClick={() => setIsAsc(true)}
                className="text-2xl cursor-pointer"
              />
            )}
          </>
        )}
      </div>
      <div className="grid px-2 gap-3">
        {filterOption.map((ele) => {
          return (
            <div
              key={ele.id}
              className="flex w-full justify-start items-center text-[11px]  md:text-[13px] lg:text-[15px] font-light"
            >
              <input
                type="checkbox"
                className="p-2"
                onChange={(e) => handleCheckboxChange(ele, e.target.checked)}
              />
              <p className="ml-1 lg:ml-3">{ele.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
