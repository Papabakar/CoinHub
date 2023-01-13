import React from "react";
import { NAVDATA } from "../../data/document.data";
import { HashLink } from "react-router-hash-link";

const navBarTextStyle = {
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "48px",
};

function NavBarOptions({setNavFun, navState}) {
  let navElements = NAVDATA.map((item, index) => {
    const { name, route } = item;

    return (
      <span className="text-white text-md cursor-pointer" key={index} onClick={() => setNavFun(!navState)}>
        <HashLink smooth to={`/#${route}`}>
          <div className="w-full h-[48px] flex justify-start items-center border-b border-b-[#8a8f98]/20">
            <p className="text-white" style={navBarTextStyle}>
              {name}
            </p>
          </div>
        </HashLink>
      </span>
    );
  });

  return (
    <div className="w-full flex flex-col justify-start items-start px-[24px]">
      {navElements}
    </div>
  );
}

export default NavBarOptions;
