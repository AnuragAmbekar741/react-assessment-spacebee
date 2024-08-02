import React, { ReactNode } from "react";

interface LeftContainerProps {
  children: ReactNode;
}

const LeftContainer: React.FC<LeftContainerProps> = ({ children }) => {
  return <div className="hidden md:flex md:w-[25%] lg:w-[20%]">{children}</div>;
};

export default LeftContainer;
