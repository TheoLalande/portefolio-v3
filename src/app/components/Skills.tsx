import SkillBar from "./global/SkillBar";

const Skills = () => {
  return (
    <div className="radial-bg w-screen h-screen" id="skillsPage">
      <div className="flex  w-screen h-screen gap-3 grid-flow-col-dense	relative justify-center items-center ">
        <div className="flex w-1/3 h-[534px]  ml-64 rounded-xl relative bg-white backdrop-filter backdrop-blur-lg bg-opacity-10"></div>
        <div className="flex flex-col w-2/3 h-[534px] bg-white mr-64 rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-10 p-10 text-white align-middle justify-evenly">
          <SkillBar text="HTML" percent="100%" />
          <SkillBar text="CSS / Tailwind" percent="95%" />
          <SkillBar text="Vue.js, Nuxt.js" percent="90%" />
          <SkillBar text="JavaScript / TypeScript" percent="85%" />
          <SkillBar text="NodeJs, ExpressJs" percent="80%" />
          <SkillBar text="MySQL, MongoDB" percent="70%" />
          <SkillBar text="React.js + Redux" percent="65%" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
