import React from "react";
import { BsCurrencyDollar, BsBag } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { MdOutlineAccountBalance, MdArrowUpward } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai";

const AccountStatements = () => {
  return (
    <>
      <div className="flex items-center w-full pl-36 pt-5 mt-5 mb-12 ">
        <div className="flex items-center mr-24">
          <div className="p-8 bg-slate-200 rounded-[50%] mr-3">
            <BsCurrencyDollar size={30} color="green" />
          </div>
          <div>
            <p className="text-sm text-slate-400 tracking-wide ">Earning</p>
            <h1 className="text-2xl font-bold tracking-wide">$198k</h1>
            <p className="text-sm  tracking-wide">
              <span className="text-orange-700 font-medium">
                <MdArrowUpward className="inline-block mr-[2px] -mt-1" />
                37.8%
              </span>{" "}
              this month
            </p>
          </div>
        </div>
        <div className="flex items-center mr-24">
          <div className="p-8 bg-slate-300 rounded-[50%] mr-3">
            <GrNotes size={30} />
          </div>
          <div>
            <p className="text-sm text-slate-400 tracking-wide ">Earning</p>
            <h1 className="text-2xl font-bold tracking-wide">$2.4k</h1>
            <p className="text-sm  tracking-wide">
              <span className="text-red-900 font-medium">
                <AiOutlineArrowDown className="inline-block mr-[2px] -mt-1" />
                2%
              </span>{" "}
              this month
            </p>
          </div>
        </div>
        <div className="flex items-center mr-24">
          <div className="p-8 bg-slate-200 rounded-[50%] mr-3">
            <MdOutlineAccountBalance size={30} color="blue" />
          </div>
          <div>
            <p className="text-sm text-slate-400 tracking-wide ">Earning</p>
            <h1 className="text-2xl font-bold tracking-wide">$2.4k</h1>
            <p className="text-sm  tracking-wide">
              <span className="text-red-900 font-medium">
                <AiOutlineArrowDown className="inline-block mr-[2px] -mt-1" />
                2%
              </span>{" "}
              this month
            </p>
          </div>
        </div>
        <div className="flex items-center mr-24">
          <div className="p-8 bg-slate-300 rounded-[50%] mr-3">
            <BsBag size={30} color="red" />
          </div>
          <div>
            <p className="text-sm text-slate-400 tracking-wide ">Earning</p>
            <h1 className="text-2xl font-bold tracking-wide">$89k</h1>
            <p className="text-sm  tracking-wide">
              <span className="text-orange-700 font-medium">
                <MdArrowUpward className="inline-block mr-[2px] -mt-1" />
                11%
              </span>{" "}
              this month
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountStatements;
