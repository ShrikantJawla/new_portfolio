import React, { Children } from "react";
import arrowIcon from "@/assets/Images/Arrow-1-1 1.png";
import Image from "next/image";

type Props = { child: React.ReactNode | undefined };

const HeaderSection = (props: Props) => {
  return (
    <div className="w-full min-h-[50px] flex flex-col gap-2 md:flex-row justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <p className="font-[700] text-[30px] lg:text-[40px] leading-[48px] font-syne">
          SkillsSet
        </p>
        <Image src={arrowIcon} alt="Arrow Icon" className="h-[22px]" />
      </div>
      {props.child ? props.child : null}
    </div>
  );
};

export default HeaderSection;
