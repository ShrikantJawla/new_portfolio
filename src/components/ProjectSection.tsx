import React from "react";
import HeaderSection from "./HeaderSection";
import SingleProject from "./SingleProject";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <div className="w-full min-h-[60vh] pb-5">
      <HeaderSection title="Projects" />
      <div className="w-full flex flex-col gap-[50px] lg:gap-[100px] mt-1 lg:mt-6">
        {new Array(5).fill(0).map((ele, ind) => (
          <SingleProject key={ind} isReverse={ind % 2 == 0 ? false : true} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-16">
        <button className="w-[145px] h-[40px] transition-all duration-500 ease-in-out bg-[--theme_blue] hover:bg-[--theme_purple] text-white rounded-md">
          View More
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
