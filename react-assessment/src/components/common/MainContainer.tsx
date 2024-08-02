import React, { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-between w-full h-screen px-10 md:px-16 lg:px-20 md:pt-20 border">
      {children}
    </div>
  );
};

export default MainContainer;
