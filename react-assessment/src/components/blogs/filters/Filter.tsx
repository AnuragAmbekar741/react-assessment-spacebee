import React from "react";
import { FilterOptions } from "../../../utils/constant";

interface FilterProps {
  title: string;
  filterOption: FilterOptions[];
}

const Filter: React.FC<FilterProps> = ({ title, filterOption }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="py-2 px-4 tex-md font-medium bg-gray-100 text-slate-800 rounded-md">
        {title}
      </div>
      <div className="grid px-2 gap-3">
        {filterOption.map((ele) => {
          return (
            <div
              key={ele.id}
              className="flex w-full justify-start items-center text-[15px] font-light"
            >
              <input type="checkbox" className="p-2" />
              <p className="ml-3">{ele.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
