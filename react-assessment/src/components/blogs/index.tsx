import React from "react";
import MainContainer from "../common/MainContainer";
import LeftContainer from "../common/LeftContainer";
import RightContainer from "../common/RightContainer";
import FilterContainer from "./filters/FilterContainer";
import BlogContainer from "./BlogContainer";
import Pagination from "./Pagination";

const Blogs: React.FC = () => {
  return (
    <div>
      <MainContainer>
        <LeftContainer>
          <FilterContainer />
        </LeftContainer>
        <RightContainer>
          <div className="grid">
            <BlogContainer />
            <Pagination />
          </div>
        </RightContainer>
      </MainContainer>
    </div>
  );
};

export default Blogs;
