import React from "react";
import Image from "next/image";
import airbnblogo from "../Assest/airbnb.jpg";
import { FaBars, FaSearch } from "react-icons/fa";

import { RxAvatar } from "react-icons/rx";
import { MdLanguage } from "react-icons/md";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2 ">
      <div className="relative flex items-center px-5 h-5 cursor-pointer my-auto">
        <Image src={airbnblogo} alt="" width="200px" height="100px" />
      </div>
      <div className="flex flex-row items-center justify-center md:border-2 rounded-full py-2">
        <input
          className=" flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <FaSearch className=" hidden md:inline-flex h-5 bg-red-400 text-white rounded-full cursor-pointer md:mx-2" />
      </div>
      <div className="flex flex-row relative right-[95px] justify-end ">
        <p className=" py-1 relative right-[15px]  hidden md:inline-flex">
          Airbnb your home
        </p>
        <div className="py-2  ">
          {" "}
          <MdLanguage />
        </div>
        <div className=" relative bottom -1 left-[15px]  flex flex-row py-2 px-3 md:border-2 rounded-full">
          <div className="px-2">
            <FaBars />
          </div>
          <div className="px-2">
            {" "}
            <RxAvatar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
