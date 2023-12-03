"use client";

import React, { useEffect, useState } from "react";
import SingleProject from "./SingleProject";
import { IProjects, projects } from "@/assets/data/projects";

type Props = {};

const MoreProjectsSection = (props: Props) => {
  const [skipElement, setskipElement] = useState(3);
  const [projectsList, setProjectsList] = useState<IProjects[]>([]);

  const handleClickMore = () => {
    setskipElement((p) => (p = p + 3));
  };
  useEffect(() => {
    setProjectsList([...projects.slice(3, skipElement)]);
  }, [skipElement]);
  return (
    <div
      className={`w-full h-fit ${
        projectsList.length + 3 < projects.length && "mt-[50px] lg:mt-[100px]"
      }`}
    >
      <div className="w-full flex flex-col gap-[50px] lg:gap-[100px] mt-1 lg:mt-6 ">
        {projectsList.map((ele, ind) => (
          <SingleProject
            projectData={ele}
            key={ind}
            isReverse={ind % 2 == 0 ? true : false}
          />
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-16">
        {projectsList.length + 3 < projects.length && (
          <button
            onClick={handleClickMore}
            className="w-[145px] h-[40px] transition-all duration-500 ease-in-out bg-[--theme_blue] hover:bg-[--theme_purple] text-white rounded-md"
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default MoreProjectsSection;
