import React from "react";
import { SOCIAL_ICONS_DATA } from "../../data/social-icons.data";

function SocialBar() {
  let socialIconElements = SOCIAL_ICONS_DATA.map((iconData, index) => {
    if (index === 0) {
      //first icon
      return <img src={iconData.url} alt="" className="w-[20px] h-[20px]" />;
    } else {
      return <img src={iconData.url} alt="" className="w-[20px] h-[20px] ml-4" />;
    }
  });

  return <div className="flex justify-start items-start">{socialIconElements}</div>;
}

export default SocialBar;
