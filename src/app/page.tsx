import bgHeader from "../../public/images/bgHeader.png";
import header from "../../public/images/header.png";
import Image from "next/image";
import { IoIosArrowRoundDown } from "react-icons/io";
import HomePage from "./components/HomePage";
import NavBar from "./components/navBar";
import About from "./components/About";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <NavBar />
      {/* <HomePage /> */}
      <About />
    </main>
  );
}
