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

let skilsArray = [
  { title: "HTML", image: html },
  { title: "CSS", image: css },
  { title: "JS", image: js },
  { title: "React", image: react },
  { title: "Redux", image: redux },
  { title: "TS", image: ts },
  { title: "Nextjs", image: nextjs },
  { title: "Nodejs", image: nodejs },
  { title: "Expressjs", image: express },
  { title: "Framer\nMotion", image: framerMotion, figma },
  { title: "MongoDB", image: mongodb },
  { title: "Firebase", image: firebase },
  { title: "Style\nComponent", image: styled },
  { title: "Tailwindcss", image: tailwind },
];

type Props = {};

const SkillsSection = (props: Props) => {
  return (
    <div className="w-full min-h-fit pb-5">
      <HeaderSection title="SkillsSet" child={<SkillsBtns />} />
      <div className="w-full min-h-[100px] grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 mt-4 gap-5 md:px-3">
        {skilsArray.map((ele, ind) => (
          <div
            key={ind}
            className="group flex justify-center items-center p-1 transition-all duration-500 ease-in-out cursor-pointer hover:scale-150 relative"
          >
            <Image
              src={ele.image}
              alt={ele.title}
              className="group-hover:blur-[2px]"
            />
            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-500 ease-in-out hidden group-hover:flex text-[15px] md:text-[19px] font-bold text-center">
              {ele.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
