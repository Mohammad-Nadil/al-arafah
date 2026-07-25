import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center ">
      <div className="  w-40 aspect-square border-8 border-primary border-t-0 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
