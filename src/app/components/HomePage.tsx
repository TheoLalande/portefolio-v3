"use client";

import Image from "next/image";
import { IoIosArrowRoundDown } from "react-icons/io";
import H1 from "./global/H1";
import React, { useEffect } from "react";

import H2 from "./global/H2";
const HomePage = () => {
  return (
    <div>
      <div className=" z-index[2] h-screen w-screen" id="homePage">
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
