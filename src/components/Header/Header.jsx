import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex text-center justify-between p-7 w-[85%]">
        <div>
          <h1 className="text-xl font-semibold tracking-wide pl-9">
            Hello Rohan 👋
          </h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-200 pt-1 pb-1 pr-5 pl-5 rounded-md border-none outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
