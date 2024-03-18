import React from "react";

const SkillBar = (props: any) => {
  return (
    <div className="w-full bg-[#7C7C7C] border-gray-700 border-2 border-solid   rounded-full  ">
      <div
        className={`bg-[#070918] h-full rounded-full relative z-10 p-2 pl-5 text-lg flex flex-row`}
        style={{ width: props.percent }}
      >
        <span className="w-full">{props.text}</span>
        <span className="flex justify-end w-full">{props.percent}</span>
      </div>
    </div>
  );
};

export default SkillBar;
