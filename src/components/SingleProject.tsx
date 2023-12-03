import Image from "next/image";
import React from "react";
import { IProjects } from "@/assets/data/projects";

type Props = { isReverse: boolean; projectData: IProjects };

const SingleProject = (props: Props) => {
  const { title, desc, images, techStacks, btns } = props.projectData;
  return (
    <div
      className={`w-full h-fit flex flex-col lg:flex-row ${
        props.isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-1 md:gap-16  ${
        props.isReverse ? "lg:justify-center" : "lg:justify-center"
      } items-center dark:text-white`}
    >
      {/*Top Title section */}
      <div className="w-full flex justify-center font-spaceGrotesk md:hidden">
        <p className="font-[700] text-[23px] md:text-[25px] py-1">{"title"}</p>
      </div>
      <div className="w-full sm:w-[440px] md:w-[548px] h-[300px] md:h-[303px] project_section_gradient border shadow-md border-gray-500 rounded-md">
        {/* <Image
          src={images[0]}
          alt="project"
          className="w-full h-full object-cover object-bottom shadow-md rounded-md"
        /> */}
        <img
          src={images[0]}
          alt="project"
          className="w-full h-full object-cover object-top shadow-md rounded-md"
        />
      </div>
      <div className="w-full sm:w-[440px] md:w-[548px] h-fit md:h-[303px] flex flex-col gap-5 mt-4 md:mt-1">
        {/* Title section */}
        <div className="w-full font-spaceGrotesk hidden md:flex">
          <p className="font-[700] text-[23px] md:text-[25px]">{title}</p>
        </div>
        {/* Description section */}
        <div>
          <p className="dark:text-gray-300 text-[#273653] text-[14px] md:text-[16px]">
            <span className="inline-flex h-[1px] w-[60px] bg-black relative top-[-5px] mr-2"></span>
            &ldquo;{desc}&rdquo;
          </p>
        </div>
        {/* Tech section */}
        <div className="w-full">
          <p className="font-[700] text-[16px]">TECH STACKS</p>
          <div className="w-full flex flex-wrap gap-3 mt-2">
            {techStacks.map((ele, ind) => (
              // <Image src={ele.img} key={ind} alt={ele.title} width={34} height={34} />
              <img
                src={ele.img}
                key={ind}
                alt={ele.title}
                width={35}
                height={34}
              />
            ))}
          </div>
          <div className="w-full flex mt-8 gap-3">
            {btns.githubUrl && (
              <a href={btns.githubUrl} target="_blank">
                <button className="w-[138px] md:w-[145px] transition-all duration-500 ease-in-out h-[38px] md:h-[40px] hover:bg-[--theme_purple] hover:text-white border-[#919191] border">
                  Github
                </button>
              </a>
            )}
            {btns.liveUrl && (
              <a href={btns.liveUrl} target="_blank">
                <button className="w-[145px] h-[40px] transition-all duration-500 ease-in-out bg-[--theme_blue] hover:bg-[--theme_purple] text-white">
                  Open Live<span className="ml-1 relative top-[-2px]">↗</span>
                </button>
              </a>
            )}
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
