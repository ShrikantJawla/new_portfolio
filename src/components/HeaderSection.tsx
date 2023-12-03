import React from "react";
import arrowIcon from "@/assets/Images/Arrow-1-1 1.png";
import Image from "next/image";

type Props = { title: string; child?: React.ReactNode | undefined };

const HeaderSection = (props: Props) => {
  return (
    <div className="w-full min-h-[50px] flex flex-col gap-2 md:flex-row justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <p className="font-[700] text-[30px] lg:text-[36px] leading-[48px] font-syne text-black dark:text-white">
          {props.title}
        </p>
        <Image src={arrowIcon} alt="Arrow Icon" className="h-[22px]" />
      </div>
      <div className="mt-5">{props.child ? props.child : null}</div>
    </div>
  );
};

export default HeaderSection;
