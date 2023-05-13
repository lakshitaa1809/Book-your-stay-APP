import React from "react";
import Image from "next/image";

function Card({ src, title, price }) {
  return (
    <div className="rounded-lg  transition duration-200 hover:transform scale-105">
      <Image
        className="rounded-lg  hover: cursor-pointer transition duration-200 transform scale-105"
        src={src}
        alt=""
        width="500"
        height="900"
      />
      <div className="mt-[10px] ml-[5px]">
        <h2>{title}</h2>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
