import React from "react";
import HeaderSection from "./HeaderSection";
import SingleProject from "./SingleProject";
import { projects } from "@/assets/data/projects";
import MoreProjectsSection from "./MoreProjectsSection";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <>
      <div className="w-full min-h-[60vh]">
        <HeaderSection title="Projects" />
        <div className="w-full flex flex-col gap-[50px] lg:gap-[100px] mt-1 lg:mt-6 ">
          {projects.slice(0, 3).map((ele, ind) => (
            <SingleProject
              projectData={ele}
              key={ind}
              isReverse={ind % 2 == 0 ? false : true}
            />
          ))}
        </div>
        <MoreProjectsSection />
        
      </div>
    </>
  );
};

export default ProjectSection;
