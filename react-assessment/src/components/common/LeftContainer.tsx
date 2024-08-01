import React, { ReactNode } from "react";

interface LeftContainerProps {
  children: ReactNode;
}

const LeftContainer: React.FC<LeftContainerProps> = ({ children }) => {
  return <div className="hidden md:w-[20%] md:flex">{children}</div>;
};

export default LeftContainer;
