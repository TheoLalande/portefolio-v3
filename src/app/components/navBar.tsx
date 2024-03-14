const navBar = () => {
  return (
    <div className="fixed flex align-middle justify-center items-center  top-10 z-[2] w-screen ">
      <div className="absolute w-auto bg-white py-4 px-7 rounded-3xl opacity-15 ">
        <div className="flex gap-8 font-extralight opacity-0">
          <button>A propos de moi</button>
          <button>Compétences</button>
          <button>Mes projets</button>
        </div>
      </div>
      <div className="relative flex text-white gap-8 font-extralight">
        <button>A propos de moi</button>
        <button>Compétences</button>
        <button>Mes projets</button>
      </div>
    </div>
  );
};

export default navBar;
