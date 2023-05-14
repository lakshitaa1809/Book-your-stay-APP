import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaSearch, FaUserFriends } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { MdLanguage } from "react-icons/md";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
const Header = () => {
  const [searchInput, setsearchInput] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [guestNo, setguestNo] = useState(3);
  const router = useRouter();
  const resetInput = () => {
    setsearchInput("");
  };
  const handleSelect = (ranges) => {
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const DaysCounter = () => {
    const difference = Math.abs(startDate - endDate);
    const days = difference / (1000 * 3600 * 24);
    return days + 1;
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: guestNo,
        days: DaysCounter(),
      },
    });
    setsearchInput("");
  };
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
        <div className=" flex flex-grow  outline-none text-sm text-gray-600 placeholder-gray-400 cursor-pointer items-center align-center font-bold ">
          <div className="pl-5">
            <input
              className="flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
              type="text"
              placeholder="Search a place to stay"
              value={searchInput}
              onChange={(e) => setsearchInput(e.target.value)}
            />
          </div>
        </div>
        <FaSearch className="relative right-[20px] top-[2px] hidden md:inline-flex h-5 bg-red-500 text-white rounded-full cursor-pointer md:mx-2 " />
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-2 ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#228B22"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <FaUserFriends className="h-5" />
            <input
              type="number"
              min={1}
              value={guestNo}
              onChange={(e) => setguestNo(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-blue-600"
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button
              className="flex-grow bg-red-400 text-white rounded-full"
              onClick={search}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
