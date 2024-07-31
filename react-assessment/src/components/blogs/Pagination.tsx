import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSelector, useDispatch } from "react-redux";
import { next, back, setPage } from "../../redux/slices/paginationSlice";
import { RootState, AppDispatch } from "../../redux/store";

interface PaginationProps {}

const Pagination: React.FC<PaginationProps> = () => {
  const page = useSelector((state: RootState) => state.pagination.page);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex items-center w-full justify-end py-10">
      <ChevronLeftIcon
        className={`text-2xl ${
          page === 1 ? "text-slate-300" : "text-slate-800 cursor-pointer"
        }`}
        onClick={() => dispatch(back())}
      />
      <div
        className={`w-8 h-8 flex mx-2 text-[14px] font-light justify-center items-center border rounded-full ${
          page === 1
            ? "bg-black text-white"
            : "text-slate-800 border-none cursor-pointer"
        } `}
        onClick={() => dispatch(setPage(1))}
      >
        1
      </div>
      <div
        className={`w-8 h-8 flex mx-2 text-[14px] font-light justify-center items-center border rounded-full ${
          page === 2
            ? "bg-black text-white"
            : "text-slate-800 border-none cursor-pointer"
        }`}
        onClick={() => dispatch(setPage(2))}
      >
        2
      </div>
      <div
        className={`w-8 h-8 flex mx-2 text-[14px] font-light justify-center items-center border rounded-full ${
          page === 3
            ? "bg-black text-white"
            : "text-slate-800 border-none cursor-pointer"
        }`}
        onClick={() => dispatch(setPage(3))}
      >
        3
      </div>
      <KeyboardArrowRightIcon
        className={`text-2xl ${
          page === 3 ? "text-slate-300" : "text-slate-800 cursor-pointer"
        }`}
        onClick={() => dispatch(next())}
      />
    </div>
  );
};

export default Pagination;
