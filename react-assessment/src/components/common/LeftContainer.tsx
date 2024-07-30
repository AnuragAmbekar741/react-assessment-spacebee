import React, { ReactNode } from "react";

interface LeftContainerProps {
  children: ReactNode;
}

const LeftContainer: React.FC<LeftContainerProps> = ({ children }) => {
  return <div className="w-[20%] flex">{children}</div>;
};

export default LeftContainer;
