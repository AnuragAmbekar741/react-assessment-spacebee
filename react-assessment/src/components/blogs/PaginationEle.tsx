import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/slices/paginationSlice";
import { AppDispatch } from "../../redux/store";

interface PaginationEleProps {
  page: number;
}

const PaginationEle: React.FC<PaginationEleProps> = ({ page }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div
      className={`w-8 h-8 flex mx-2 text-[14px] font-light justify-center items-center border rounded-full ${
        page === 1
          ? "bg-black text-white"
          : "text-slate-800 border-none cursor-pointer"
      } `}
      onClick={() => dispatch(setPage(page))}
    >
      1
    </div>
  );
};

export default PaginationEle;
