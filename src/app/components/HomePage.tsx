"use client";
import bgHeader from "../../../public/images/bgHeader.png";
import header from "../../../public/images/header.png";
import Image from "next/image";
import { IoIosArrowRoundDown } from "react-icons/io";
import H1 from "./global/H1";
import React, { useEffect } from "react";

import H2 from "./global/H2";
const HomePage = () => {
  useEffect(function mount() {
    // function onScroll() {
    //   console.log("scroll!");
    // }
    // window.addEventListener("scroll", preventMotion, false);
    // window.addEventListener("touchmove", preventMotion, false);
    // window.addEventListener("scroll", onScroll);
    // return function unMount() {
    //   window.removeEventListener("scroll", onScroll);
    // };
  });
  // window.addEventListener("scroll", preventMotion, false);
  // window.addEventListener("touchmove", preventMotion, false);

  function preventMotion(event: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
  }
  return (
    <div>
      {/* BACKGROUND_______________________________________________________________________________________ */}
      <div className="absolute h-screen w-screen">
        <Image
          className="relative z-index-0"
          src={bgHeader}
          alt="bg-header"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Image
          className="relative z-index-[1]"
          src={header}
          alt="header"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      {/* CONTENT___________________________________________________________________________________________ */}
      <div className="absolute z-index[2] h-screen w-screen">
        <div className="relative h-screen w-screen flex justify-center items-center  text-white flex-col">
          <H1 text="Théo Lalande" />
          <H2 text="Développeur Front-End" />
          <button className="bg-white text-black px-4 py-2 rounded-full mt-8">
            Contactez moi
          </button>
          <div className="fixed flex bottom-10 justify-center flex-col items-center gap-3">
            <p className="text-sm md:text-base lg:text-base">
              Parcourez vers le bas pour en savoir plus sur moi.
            </p>
            <button className="bg-gray-700 rounded-full border-gray-600 border-[1px] border-solid w-8 h-8 flex items-center justify-center ">
              <IoIosArrowRoundDown className="icon" size="20px" color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
