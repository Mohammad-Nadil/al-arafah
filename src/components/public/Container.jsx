import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-7xl mx-auto h-full relative px-3  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
