import Lottie from "react-lottie";
import Refine from '../../assets/lottie/refine.svg'
import FormInput from "../../snippets/form-input/form-input";
import { useState } from "react";
import FooterLogo from '../../assets/svgs/logo.svg'
import {
  NAVIGATION_LIST_ITEMS,
  SUPPORT_LIST_ITEMS,
  LEARN_LIST_ITEMS,
} from "../../data/bottom-nav-items.data";

import animationData from "../../assets/lottie/127832-heart-vibes.json";
import BlogNewsletter from "../newsletter/newsletter";

const currentYear = new Date().getFullYear();

const bottomNavHeaderStyle = {
  color: "#ffff",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  padding: "0px 0px 10px 0px",
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

const FooterMenu = () => {
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
    <div>
    <BlogNewsletter />
    
    <div className="px-5 md:px-10 flex flex-col md:flex-row justify-between items-start border-t border-lightBorder border-opacity-30 py-10 gap-10">

      <div>
        <img src={FooterLogo} alt="footer-logo" className="min-w-[200px] opacity-75" />
      </div>

      <div className="flex gap-10 ">
        <div className="flex flex-col justify-start items-start">
          {bottomNavElements_1}
        </div>
        <div className="flex flex-col justify-start items-start">
          {bottomNavElements_2}
        </div>
      </div>
    </div>

    <div className="text-gray-400 flex w-full xl:mt-0 items-center flex-col md:flex-row md:justify-between border-t border-lightBorder border-opacity-30 px-5 p-4 pb-3 text-sm md:text-md 2xl:text-base text-darkgray bg-main-bg gap-1.5">

        <span> {currentYear} Coinhub © | All Rights Reserved</span>

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
              className="ml-1 flex items-center justify-center font-bold text-white text-opacity-70 hover:text-opacity-100 hover:transition-[400ms] hover:ease-in-out hover:scale-[101%] italic"
              href="https://t.me/webdevmiles"
              rel="noreferrer"
              target={"_blank"}
              >
              {" "}
              <div className="flex justify-center items-center">
                <img src={Refine} className="max-w-[50px] ml-1" alt="Designed & Developed by Refine Studio"/>
              </div>
            </a>
          </div>
        </div>
      </div>
  </div>
  );
};

export default FooterMenu;
