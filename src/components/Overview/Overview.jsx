import React from "react";
import Dashboard from "./Dashboard";
import DonutChart from "./DonutChart";

const Overview = () => {
  return (
    <>
      <div className="flex w-[96%] p-5 mt-0 mb-0 ml-auto mr-auto">
        <div className="w-3/5 mr-20">
          <h1 className="mb-5 pl-4 text-xl font-bold tracking-wider">
            Overview
          </h1>
          <Dashboard />
        </div>
        <div className="mt-2 p-3 ml-16">
          <h1 className="text-xl font-bold tracking-wider">Customers</h1>
          <DonutChart />
        </div>
      </div>
    </>
  );
};

export default Overview;
