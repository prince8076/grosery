import React from "react";

function PageWapper({ children, className }) {
  return (
    <div
      className={` ${
        className && className
      } w-full lg:w-[90%] m-auto flex flex-col md:px-6 lg:px-2 gap-5 justify-center `}
    >
      {children}
    </div>
  );
}

export default PageWapper;
