import React, { ReactNode } from "react";

interface RightContainerProps {
  children: ReactNode;
}

const RightContainer: React.FC<RightContainerProps> = ({ children }) => {
  return (
    <div className="w-full md:w-[77.5%] flex overflow-y-auto">{children}</div>
  );
};

export default RightContainer;
