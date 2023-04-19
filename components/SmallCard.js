import React from "react";
import Image from "next/image";
const SmallCard = ({ img, distance, location }) => {
  return (
    <div>
      <div>
        <Image src={img} alt="img" layout="fill"
        objectFit:"cover"/>
      </div>
      <div></div>
    </div>
  );
};

export default SmallCard;
