import React from "react";
import {
  MdOutlineDashboardCustomize,
  MdOutlineProductionQuantityLimits,
  MdLiveHelp,
} from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import Logo from "../../assets/Profile_Photo.jpeg";

const Sidebar = () => {
  return (
    <div className="bg-indigo-950 p-3 h-screen text-white w-80 relative mr-5">
      {/* Dashboard */}
      <div className="flex text-center justify-center mb-16 mt-3">
        <MdOutlineDashboardCustomize className="mr-2 mt-[2px]" size={27} />
        <h1 className="text-xl">Dashboard</h1>
      </div>

      <div>
        <ul>
          <li className="flex pt-3 pb-3 pr-3 pl-3 mb-5 bg-purple-900  rounded-xl hover:bg-purple-900 cursor-pointer">
            <MdOutlineDashboardCustomize className="mr-2 mt-[3px]" size={18} />
            Dashboard
          </li>
          <li className="flex pt-3 pb-3 pr-3 pl-3 relative mb-5 rounded-xl hover:bg-purple-900 cursor-pointer">
            {" "}
            <MdOutlineProductionQuantityLimits
              className="mr-2 mt-[3px]"
              size={18}
            />{" "}
            Product <AiOutlineRight className="mt-[4px] absolute right-1" />
          </li>
          <li className="flex pt-3 pb-3 pr-3 pl-3 relative  mb-5 rounded-xl hover:bg-purple-900 cursor-pointer">
            <BsFillPersonLinesFill className="mr-2 mt-[3px]" size={18} />
            Customer
            <AiOutlineRight className="mt-[4px] absolute right-1" />
          </li>
          <li className="flex pt-3 pb-3 pr-3 pl-3 relative mb-5 rounded-xl hover:bg-purple-900 cursor-pointer">
            <FaWallet className="mr-2 mt-[3px]" size={18} />
            Income
            <AiOutlineRight className="mt-[4px] absolute right-1" />
          </li>
          <li className="flex pt-3 pb-3 pr-3 pl-3 relative mb-5 rounded-xl hover:bg-purple-900 cursor-pointer">
            <IoSettings className="mr-2 mt-[3px]" size={18} />
            Promote
            <AiOutlineRight className="mt-[4px] absolute right-1" />
          </li>
          <li className="flex pt-3 pb-3 pr-3 pl-3 relative mb-5 rounded-xl hover:bg-purple-900 cursor-pointer">
            <MdLiveHelp className="mr-2 mt-[3px]" size={18} />
            Help
            <AiOutlineRight className="mt-[4px] absolute right-1" />
          </li>
        </ul>
      </div>

      {/* Profile */}
      <div className="flex bg-purple-900 pt-3 pb-3 pr-3 pl-3 rounded-xl absolute bottom-14 w-[90%]">
        <img src={Logo} alt="" className="h-10 w-10 rounded-[50%] mr-3 mt-1" />
        <div>
          <h2 className="text-[16px]">Rohan</h2>
          <p className="text-[13px]">Project Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
