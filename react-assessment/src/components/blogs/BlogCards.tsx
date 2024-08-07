import React from "react";
import { Blog } from "../../types";
import { BASE_URL } from "../../config";
import { formatDate } from "../../utils/general";

interface BlogCardsProps extends Blog {}

const BlogCard: React.FC<BlogCardsProps> = ({
  title,
  url,
  image,
  date,
  body,
  source,
  author,
}) => {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="w-full flex flex-col gap-10 md:gap-20 lg:gap-8 border-b border-slate-200 px-2 pb-7 mb-10 cursor-pointer"
    >
      <div className="w-full flex justify-start items-start md:items-center">
        <div className="md:w-[13%] lg:w-[10%]  h-[4.5rem]">
          <img
            src={BASE_URL + image}
            className="w-full h-[4.5rem] rounded-xl"
            alt="blog image"
          />
        </div>
        <div className=" w-[90%] md:w-[87%]  md:h-[4.5rem]  flex justify-between items-start">
          <div className="w-[90%] flex flex-col justify-start gap-1 pl-5">
            <div className="flex items-start">
              <p className="text-[12px] text-gray-500 font-light">
                {date ? formatDate(date) : "No particular date"}
              </p>
            </div>
            <div className="w-full flex items-end">
              <p className="text-[16px] font-semibold leading-6 md:pb-3">
                {title}
              </p>
            </div>
          </div>
          <div className="w-[10%] flex justify-end">
            <p className="text-[12px] text-gray-500">{source}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[15px] font-light">{body.replace(/<\/?p>/g, "")}</p>
      </div>
      <div>
        <p className="text-[12.5px] font-semibold">{author}</p>
      </div>
    </div>
  );
};

export default BlogCard;
