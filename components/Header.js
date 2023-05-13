import React from "react";
import Image from "next/image";

import { FaBars, FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { MdLanguage } from "react-icons/md";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4 ">
      <div className="relative flex items-center px-5 h-5 cursor-pointer my-auto">
        <Image
          src="https://res.cloudinary.com/dehghhzey/image/upload/v1683887278/book_your_stay_kjsymj.jpg"
          alt=""
          width="200"
          height="100"
        />
      </div>
      <div className="flex flex-row items-center justify-center cursor-pointer md:border-2 rounded-full py-2 hover: bg-white shadow-md">
        <div className=" flex  grid-cols-3">
          <div className=" ml-[80px] grid-cols-1">
            <input
              className=" flex-grow  outline-none text-sm text-gray-600 placeholder-gray-400 cursor-pointer items-center align-center font-bold "
              type="text"
              placeholder="Any where  |"
            />
          </div>
          <div className=" ml-[-80px] grid-cols-2">
            <input
              className=" flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 cursor-pointer items-center align-center font-bold"
              type="text"
              placeholder="Any week  |"
            />
          </div>
          <div className=" ml-[-80px] grid-cols-3">
            <input
              className=" flex-grow bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400 cursor-pointer items-center align-center"
              type="text"
              placeholder=" Add guests"
            />
          </div>

          <FaSearch className=" relative right-[60px] top-[2px] hidden md:inline-flex h-5 bg-red-500 text-white rounded-full cursor-pointer md:mx-2 " />
        </div>
      </div>
      <div className="flex flex-row relative right-[55px] justify-end   ">
        <p className=" py-1 relative right-[15px] cursor-pointer hidden md:inline-flex hover:bg-gray-100 rounded-full p-3">
          Home
        </p>
        <div className="py-2 hover:bg-gray-100 rounded-full cursor-pointer p-3 items-center">
          {" "}
          <MdLanguage />
        </div>
        <div className=" relative bottom-[2px] left-[15px] cursor-pointer flex flex-row md:border-2 rounded-full hover:bg-gray-100 shadow-sm p-2">
          <div className="px-2 cursor-pointer">
            <FaBars />
          </div>
          <div className="px-2 cursor-pointer">
            {" "}
            <RxAvatar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
