"use client";
import React from "react";
import { Link } from "react-scroll/modules";

const NavButton = (props: any) => {
  return (
    <button>
      <Link
        activeClass="active"
        to={props.id}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <div className="relative">
          <span className="navbar__item">{props.text}</span>
        </div>
      </Link>
    </button>
  );
};

{
  /* <button className="ml-10">
<Link
  activeClass="active"
  to="projectPage"
  spy={true}
  smooth={true}
  offset={0}
  duration={500}
>
  <div className="relative">
    <span className="navbar__item">Projects</span>
  </div>
</Link>
</button> */
}
export default NavButton;

{
  /* <div className="flex gap-8 font-extralight opacity-0">
          <button>A propos de moi</button> */
}
