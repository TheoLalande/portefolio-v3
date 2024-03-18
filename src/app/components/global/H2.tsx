import React from "react";

const H2 = (props: any) => {
  return (
    <h2 className="font-light text-base md:text-lg lg:text-2xl">
      {props.text}
    </h2>
  );
};

export default H2;
