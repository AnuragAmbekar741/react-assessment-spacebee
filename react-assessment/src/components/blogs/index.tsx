import React from "react";
import MainContainer from "../common/MainContainer";
import LeftContainer from "../common/LeftContainer";
import RightContainer from "../common/RightContainer";
import FilterContainer from "./filters/FilterContainer";
import BlogContainer from "./BlogContainer";

const Blogs: React.FC = () => {
  return (
    <div>
      <MainContainer>
        <LeftContainer>
          <FilterContainer />
        </LeftContainer>
        <RightContainer>
          <BlogContainer />
        </RightContainer>
      </MainContainer>
    </div>
  );
};

export default Blogs;
