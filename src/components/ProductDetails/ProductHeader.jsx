import React from "react";

const ProductHeader = () => {
  return (
    <>
      <div className="flex w-[90%] justify-between text-center pl-6 mt-3 mb-5">
        <div>
          <h1 className="text-xl font-bold ml-9 tracking-wider">
            Product Sell
          </h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="mr-5 bg-slate-200 pt-1 pb-1 pr-5 pl-5 rounded-md border-none outline-none"
          />
          <select
            name="itemSort"
            id="itemSort"
            className="pt-1 pb-1 pr-5 pl-5 rounded-md border-none outline-none"
          >
            <option value="last 3days">Last 3 days</option>
            <option value="last 3days">Last 1 week</option>
            <option value="last 3days">Last 2 weeks</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ProductHeader;
