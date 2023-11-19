import React from "react";
import HeaderSection from "./HeaderSection";
import SkillsBtns from "./SkillsBtns";
import {
  html,
  css,
  js,
  react,
  redux,
  ts,
  nextjs,
  nodejs,
  express,
  framerMotion,
  figma,
  mongodb,
  firebase,
  tailwind,
  styled,
} from "@/components/skillsImports";
import Image from "next/image";

type Props = {};

const SkillsSection = (props: Props) => {
  return (
    <div className="w-full min-h-[600px] border">
      <HeaderSection child={<SkillsBtns />} />
      {/* <div className="w-full min-h-[100px] flex flex-col gap-5 justify-center items-center mt-3 px-9 overflow-hidden relative">
        <div className="w-full flex justify-evenly items-center gap-5 scroll_div">
          {[html, css, js, react, redux, ts, nextjs].map((ele, ind) => (
            <div key={ind} className="slide">
              <Image
                src={ele}
                alt="skill image"
                className="w-[76px] h-[77px]"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-evenly items-center gap-5 scroll_div">
          {[
            nodejs,
            express,
            framerMotion,
            figma,
            mongodb,
            firebase,
            tailwind,
          ].map((ele, ind) => (
            <div key={ind} className="slide">
              <Image
                src={ele}
                alt="skill image"
                className="w-[76px] h-[77px]"
              />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default SkillsSection;
