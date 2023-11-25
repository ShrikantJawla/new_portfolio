import React from "react";
import HeaderSection from "./HeaderSection";
import Image from "next/image";

type Props = {};

const GithubStats = (props: Props) => {
  return (
    <div className="w-full min-h-[60vh] pb-5">
      <HeaderSection title="Github Stats" />
      <div className="w-full flex flex-col mt-5">
        <div className="bg-[#0059B3] lg:h-[248px]">
          <div className="h-[120px] md:h-full w-full flex justify-center">
            <img
              className=""
              src="https://github-readme-streak-stats.herokuapp.com?user=ShrikantJawla&hide_border=true&fire=DD3704&theme=dark&background=0059b3"
              alt="github statistics"
            />
          </div>
        </div>
        <div className="w-full flex justify-center gap-3 items-center bg-black h-[120px] sm:h-[150px] lg:h-[248px]">
          <img
            className="w-[48%] sm:w-[37%] lg:w-[37%]"
            src="https://github-readme-stats.vercel.app/api?username=shrikantjawla&count_private=true&show_icons=true&bg_color=1c1d1c&text_color=ffffff&title_color=ffffff&icon_color=ffffff"
            alt="github statistics"
          />
          <img
            className="w-[36%] sm:w-[28%]"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=shrikantjawla&show_icons=true&theme=light&bg_color=1c1d1c&title_color=ffffff&text_color=ffffff&locale=en&layout=compact"
            alt="github statistics"
          />
        </div>
      </div>
    </div>
  );
};

export default GithubStats;
