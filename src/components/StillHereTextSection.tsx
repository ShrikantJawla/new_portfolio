import React from "react";

type Props = {};

const StillHereTextSection = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center min-h-fit pb-5 overflow-hidden">
      <p className="dark:text-white text-[#E4CEFF] font-spaceGrotesk whitespace-nowrap text-[78px] md:text-[150px] lg:text-[190px] xl:text-[220px] 2xl:text-[270px] font-[700]">
        Still here?
      </p>
    </div>
  );
};

export default StillHereTextSection;
