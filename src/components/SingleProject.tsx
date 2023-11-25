import Image from "next/image";
import React from "react";
import projectImage from "@/assets/Images/projectdesign.png";
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

type Props = { isReverse: boolean };

const SingleProject = (props: Props) => {
  return (
    <div
      className={`w-full h-fit flex flex-col lg:flex-row ${
        props.isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-1 md:gap-16  ${
        props.isReverse ? "lg:justify-end" : "lg:justify-start"
      } items-center`}
    >
      {/* Title section */}
      <div className="w-full flex justify-center font-spaceGrotesk md:hidden">
        <p className="font-[700] text-[23px] md:text-[25px] py-2">
          Survey Monkey Clone
        </p>
      </div>
      <div className="w-full sm:w-[440px] md:w-[548px] h-[300px] md:h-[303px] project_section_gradient">
        <Image
          src={projectImage}
          alt="project"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="w-full sm:w-[440px] md:w-[548px] h-[300px] md:h-[303px] flex flex-col gap-5 mt-4 md:mt-1">
        {/* Title section */}
        <div className="w-full font-spaceGrotesk hidden md:flex">
          <p className="font-[700] text-[23px] md:text-[25px]">
            Survey Monkey Clone
          </p>
        </div>
        {/* Description section */}
        <div>
          <p className="text-[#273653] text-[14px] md:text-[16px]">
            <div className="inline-flex border relative top-[-5px]">
              <span className="h-[1px] w-[60px] bg-black"></span>
            </div>
            “Clone of a well-known website that let users to create, send
            andanalyze sophisticated survey template"
          </p>
        </div>
        {/* Tech section */}
        <div className="w-full">
          <p className="font-[700] text-[16px]">TECH STACKS</p>
          <div className="w-full flex flex-wrap gap-2 mt-2">
            {new Array(5).fill(0).map((ele, ind) => (
              <Image src={html} key={ind} alt="html" width={34} height={34} />
            ))}
          </div>
          <div className="w-full flex mt-8 gap-3">
            <button className="w-[138px] md:w-[145px] transition-all duration-500 ease-in-out h-[38px] md:h-[40px] hover:bg-[--theme_purple] hover:text-white border-[#919191] border">
              Github
            </button>
            <button className="w-[145px] h-[40px] transition-all duration-500 ease-in-out bg-[--theme_blue] hover:bg-[--theme_purple] text-white">
              Open Live<span className="ml-1 relative top-[-2px]">↗</span>
            </button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
