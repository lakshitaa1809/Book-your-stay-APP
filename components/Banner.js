import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectfit="cover"
      />
      <div className="w-full text-center ">
        <p className="absolute top-1/2 left-[38%]">
          Not sure where to go?perfect.{" "}
        </p>
        <button className="absolute top-1/2 my-10 left-[40%] bg-white shadow-md rounded-full font-bold h-10 px-5 text-purple-500 hover:shadow-xl active:scale-90 transition duration:120">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
