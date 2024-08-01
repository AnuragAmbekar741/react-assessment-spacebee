import React, { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSelector, useDispatch } from "react-redux";
import { next, back, setPage } from "../../redux/slices/paginationSlice";
import { RootState, AppDispatch } from "../../redux/store";

interface PaginationProps {}

interface PaginationEleProps {}

const Pagination: React.FC<PaginationProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const page = useSelector((state: RootState) => state.pagination.page);
  const filteredEleCount = useSelector(
    (state: RootState) => state.filter.noOfFilteredEle
  );
  const [totalPages, setTotalPage] = useState<number>(
    Math.ceil(filteredEleCount ? filteredEleCount / 5 : 0)
  );

  useEffect(() => {
    if (filteredEleCount) {
      setTotalPage(Math.ceil(filteredEleCount / 5));
    }
  }, [filteredEleCount]);

  return (
    <div className="flex items-center w-full justify-end py-10">
      {filteredEleCount !== 0 && (
        <>
          {totalPages > 1 && (
            <ChevronLeftIcon
              className={`text-2xl ${
                page === 1 ? "text-slate-300" : "text-slate-800 cursor-pointer"
              }`}
              onClick={() => dispatch(back())}
            />
          )}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <div
                key={pageNumber}
                className={`w-8 h-8 flex mx-2 text-[14px] font-light justify-center items-center border rounded-full ${
                  page === pageNumber
                    ? "bg-black text-white"
                    : "text-slate-800 border-none cursor-pointer"
                }`}
                onClick={() => dispatch(setPage(pageNumber))}
              >
                {pageNumber}
              </div>
            )
          )}
          {totalPages > 1 && (
            <KeyboardArrowRightIcon
              className={`text-2xl ${
                page === 3 ? "text-slate-300" : "text-slate-800 cursor-pointer"
              }`}
              onClick={() => dispatch(next())}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
