import React from "react";
import Navbar from "../ui/Navbar";
import TopBar from "../ui/TopBar";

const PublicHeader = () => {
  return (
    <header id="header" className="w-full">
      <TopBar />
      <Navbar />
    </header>
  );
};

export default PublicHeader;
