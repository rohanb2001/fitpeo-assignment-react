import React from "react";
import Header from "../Header/Header";
import AccountStatements from "../AccountStatements/AccountStatements";
import Overview from "../Overview/Overview";
import Products from "../ProductDetails/Products";

const DetailContainerBox = () => {
  return (
    <>
      <div className="w-full">
        <Header />
        <AccountStatements />
        <Overview />
        <Products />
      </div>
    </>
  );
};

export default DetailContainerBox;
