import React from "react";
import HeaderSection from "./HeaderSection";
import SingleProject from "./SingleProject";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <div className="w-full min-h-[60vh] pb-5">
      <HeaderSection title="Projects" />
      <div className="w-full flex flex-col gap-[100px] mt-5">
        {new Array(5).fill(0).map((ele, ind) => (
          <SingleProject key={ind} isReverse={ind % 2 == 0 ? false : true} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
