import bgHeader from "../../public/images/bgHeader.png";
import header from "../../public/images/header.png";
import Image from "next/image";
import { IoIosArrowRoundDown } from "react-icons/io";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    <main className="h-screen w-screen">
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
      <NavBar />
      <div className="absolute z-index[2] h-screen w-screen">
        <div className="relative h-screen w-screen flex justify-center items-center  text-white flex-col">
          <h1 className="">Théo Lalande Acabzèr</h1>
          <h2>Développeur web Full-Stack</h2>
          <button className="bg-white text-black px-4 py-2 rounded-full mt-8">
            Contactez moi
          </button>
          <div className="fixed flex bottom-10 justify-center flex-col items-center gap-3">
            <p>Parcourez vers le bas pour en savoir plus sur moi.</p>
            <button className="bg-gray-700 rounded-full border-gray-600 border-[1px] border-solid w-8 h-8 flex items-center justify-center ">
              <IoIosArrowRoundDown className="icon" size="20px" color="white" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
