import Lottie from "react-lottie";
import FormInput from "../form-input/form-input";
import { useState } from "react";
import {
  NAVIGATION_LIST_ITEMS,
  SUPPORT_LIST_ITEMS,
  LEARN_LIST_ITEMS,
} from "../../data/bottom-nav-items.data";

import animationData from "../../assets/lottie/127832-heart-vibes.json";
import SocialBar from "./social-bar";

const bottomNavHeaderStyle = {
  color: "#ffff",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "24px",
  padding: "0px 0px 19px 0px",
};

const bottomNavBodyStyle = {
  color: "#8a8f98",
  fontSize: "14px",
  fontWeight: "500",
  padding: "0px 0px 14px 0px",
};

const bottomNavBodyLastStyle = {
  color: "#8a8f98",
  fontSize: "14px",
  fontWeight: "500",
};

const Footer = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const defaultFormField = {
    email: "",
  };

  const [formfield, setFormfield] = useState(defaultFormField);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormfield({ ...formfield, [name]: value });
  };

  const { email } = formfield;

  let bottomNavElements_1 = NAVIGATION_LIST_ITEMS.map((listData, index) => {
    if (index === 0) {
      //first list item
      return <h3 style={bottomNavHeaderStyle}>{listData.text}</h3>;
    } else if (index === NAVIGATION_LIST_ITEMS.length) {
      //last list item
      return <p style={bottomNavBodyLastStyle}>{listData.text}</p>;
    } else {
      return <p style={bottomNavBodyStyle}>{listData.text}</p>;
    }
  });

  let bottomNavElements_2 = SUPPORT_LIST_ITEMS.map((listData, index) => {
    if (index === 0) {
      //first list item
      return <h3 style={bottomNavHeaderStyle}>{listData.text}</h3>;
    } else if (index === SUPPORT_LIST_ITEMS.length) {
      //last list item
      return <p style={bottomNavBodyLastStyle}>{listData.text}</p>;
    } else {
      return <p style={bottomNavBodyStyle}>{listData.text}</p>;
    }
  });

  let bottomNavElements_3 = LEARN_LIST_ITEMS.map((listData, index) => {
    if (index === 0) {
      //first list item
      return <h3 style={bottomNavHeaderStyle}>{listData.text}</h3>;
    } else if (index === LEARN_LIST_ITEMS.length) {
      //last list item
      return <p style={bottomNavBodyLastStyle}>{listData.text}</p>;
    } else {
      return <p style={bottomNavBodyStyle}>{listData.text}</p>;
    }
  });

  return (
    <div className="px-10 border-t border-lightBorder border-opacity-30 ">
      <div className="grid grid-cols-1 grid-rows-5 lg:grid-cols-5 lg:grid-rows-1 my-10">
        <div className="flex flex-col items-start justify-start w-full gap-5 lg:col-span-2">
          <div className="flex flex-col gap-2">
            <span style={bottomNavHeaderStyle}>Get crypto news everyday!</span>
            <form action="w-full">
              <FormInput
                inputOptions={{
                  name: "email",
                  type: "text",
                  value: email,
                  onChange: handleChange,
                }}
              />
            </form>
          </div>

          <div className="flex flex-col justify-start items-start">
            <span className="text-white text-sm mb-4">Follow us</span>
            <SocialBar />
          </div>
        </div>

        <div className="w-[180px] lg:h-[293px] flex flex-col justify-start items-start">
          {bottomNavElements_1}
        </div>
        <div className="w-[180px] lg:h-[293px] flex flex-col justify-start items-start">
          {bottomNavElements_2}
        </div>

        <div className="w-[180px] lg:h-[293px] flex flex-col justify-start items-start">
          {bottomNavElements_3}
        </div>
      </div>

      <div className="text-gray-400 flex w-full mt-10 xl:mt-0 items-center flex-col md:flex-row md:justify-between border-t border-lightBorder border-opacity-30 px-5 p-4 pb-3 text-sm md:text-md 2xl:text-base text-darkgray bg-main-bg gap-1.5">
        <span>2022 StoicDAO © | All Rights Reserved</span>

        <div className="">
          <div className="flex">
            Created with
            <div className="flex justify-center mt-auto 2xl:pt-0.5">
              <Lottie
                options={defaultOptions}
                height={22.5}
                className=""
                width={22.5}
              />
            </div>
            by
            <a
              className="ml-1 font-bold text-white text-opacity-70 hover:text-opacity-100 hover:transition-[400ms] hover:ease-in-out hover:scale-[101%] italic"
              href="https://t.me/webdevmiles"
              rel="noreferrer"
              target={"_blank"}
            >
              {" "}
              SukkoStudio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
