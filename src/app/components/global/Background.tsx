import React from "react";
import Image from "next/image";
import bgHeader from "../../../../public/images/bgHeader.png";
import header from "../../../../public/images/header.png";
const Background = () => {
  return (
    <div>
      <div className="absolute h-screen w-screen">
        <Image
          className="relative z-index-0"
          src={bgHeader}
          alt="bg-header"
          fill={true}
          objectFit="cover"
        />
        <Image
          className="relative z-index-[1]"
          src={header}
          alt="header"
          fill={true}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Background;
