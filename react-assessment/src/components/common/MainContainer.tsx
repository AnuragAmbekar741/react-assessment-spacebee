import React, { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <div className="flex w-full h-screen px-20 pt-20 border">{children}</div>
  );
};

export default MainContainer;
