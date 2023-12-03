"use client";

import React, { useState } from "react";
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
  postgresql,
  github,
  chakraui,
  nestjs,
} from "@/components/skillsImports";
import Image, { StaticImageData } from "next/image";

export interface ISkillsArrays {
  title: string;
  image: StaticImageData;
  skillType: string[];
}

let skillsArray: ISkillsArrays[] = [
  { title: "HTML", image: html, skillType: ["all", "frontend"] },
  { title: "CSS", image: css, skillType: ["all", "frontend"] },
  { title: "JS", image: js, skillType: ["all", "frontend"] },
  { title: "React", image: react, skillType: ["all", "frontend"] },
  { title: "Redux", image: redux, skillType: ["all", "frontend"] },
  { title: "TS", image: ts, skillType: ["all", "frontend"] },
  { title: "Nextjs", image: nextjs, skillType: ["all", "frontend"] },
  { title: "Nodejs", image: nodejs, skillType: ["all", "backend"] },
  { title: "Expressjs", image: express, skillType: ["all", "backend",] },
  {
    title: "Framer\nMotion",
    image: framerMotion,
    skillType: ["all", "frontend"],
  },
  { title: "Figma", image: figma, skillType: ["all", "ui-ux"] },
  { title: "MongoDB", image: mongodb, skillType: ["all", "backend"] },
  { title: "Firebase", image: firebase, skillType: ["all", "frontend"] },
  { title: "Style\nComponent", image: styled, skillType: ["all", "frontend"] },
  { title: "Tailwindcss", image: tailwind, skillType: ["all", "frontend"] },
  { title: "PostgreSQL", image: postgresql, skillType: ["all", "backend"] },
  { title: "Github", image: github, skillType: ["all", "version Control"] },
  { title: "Chakraui", image: chakraui, skillType: ["all", "frontend"] },
  { title: "Nestjs", image: nestjs, skillType: ["all", "backend"] },
];

type Props = {};

const SkillsSection = (props: Props) => {
  const [selectedType, setSelectedType] = useState("all");
  const handleChangeType = (newType: string) => setSelectedType(newType);
  return (
    <div className="w-full min-h-fit pb-5">
      <HeaderSection
        title="SkillsSet"
        child={
          <SkillsBtns
            skillsArray={skillsArray}
            selectedType={selectedType}
            handleChangeType={handleChangeType}
          />
        }
      />
      <div className="w-full min-h-[100px] grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 mt-5 gap-4 md:px-3">
        {skillsArray.map(
          (ele, ind) =>
            ele.skillType.includes(selectedType) && (
              <div
                key={ind}
                className="group flex justify-center items-center p-1 transition-all duration-500 ease-in-out cursor-pointer hover:scale-125 relative border h-[120px] rounded-lg"
              >
                <Image
                  src={ele.image}
                  alt={ele.title}
                  className="group-hover:blur-[2px]"
                  width={60}
                  height={60}
                />
                <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-500 ease-in-out hidden group-hover:flex text-[14px] md:text-[19px] font-bold text-center dark:text-white">
                  {ele.title}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
