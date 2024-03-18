const navBar = () => {
  return (
    <div className="fixed flex align-middle justify-center items-center  top-10 z-[2] w-screen ">
      <div className="m-5 md:m-2 lg:m-0 absolute w-auto bg-white py-4 px-7 rounded-3xl opacity-15 ">
        <div className="flex font-extralight opacity-0 text-sm gap-5 md:text-base md:gap-7 lg:gap-8">
          <button>A propos de moi</button>
          <button>Compétences</button>
          <button>Mes projets</button>
        </div>
      </div>
      <div className="relative flex text-white font-extralight text-sm gap-5 md:text-base md:gap-7 lg:gap-8">
        <button>A propos de moi</button>
        <button>Compétences</button>
        <button>Mes projets</button>
      </div>
    </div>
  );
};

export default navBar;
