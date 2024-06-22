import React from "react";

const Loader = () => {
  return (
    <div className="absolute flex justify-center items-center w-full h-full">
      <div className=" animate-spin border-main-purple border-2 rounded-[50%] w-6 h-6 border-l-transparent"></div>
    </div>
  );
};

export default Loader;
