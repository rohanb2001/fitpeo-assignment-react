import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import DetailContainerBox from "../DetailContainerBox/DetailContainerBox";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <DetailContainerBox />
    </div>
  );
};

export default Layout;
