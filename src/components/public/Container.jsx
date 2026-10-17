import React from "react";

const Container = ({ children, className, ref }) => {
  return (
    <div ref={ref} className={`max-w-7xl mx-auto h-full relative px-3  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
