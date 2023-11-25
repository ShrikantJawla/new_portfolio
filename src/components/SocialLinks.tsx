import Image from "next/image";
import React from "react";
import illus from "@/assets/Images/Flying Pilot  3D Illustration.png";
import insta from "@/assets/Images/instagram 1.png";
import linkedin from "@/assets/Images/linkedin 1.png";
import twitter from "@/assets/Images/twitter 1.png";

type Props = {};

const SocialLinks = (props: Props) => {
  return (
    <div className="w-full min-h-fit pb-5 dark:text-white">
      <div className="w-full relative flex justify-center items-center">
        <Image
          src={illus}
          alt="Illustration"
          className="w-[62px] md:w-[133px] h-[62px] md:h-[133px] absolute left-0 bottom-[-45%] md:top-[-30%]"
        />
        <p className="text-[14px] md:text-[25px] font-[400] text-center">
          Say Hi ! or internet stalk him more or let's go <br /> somewhere
          together.
        </p>
      </div>
      <div className="w-full flex justify-center items-center mt-9">
        <a
          href="#"
          target="_blank"
          className="flex-1 flex flex-col justify-center items-center gap-2"
        >
          <Image
            src={insta}
            alt="insta logo"
            className="w-[43px] md:w-[90px] h-[43px] md:h-[90px]"
          />
          <p className="text-[12px] md:text-[16px] font-[400]">Instagram</p>
        </a>
        <a
          href="https://www.linkedin.com/in/shrikant-jawla"
          target="_blank"
          className="flex-1 flex flex-col justify-center items-center gap-1"
        >
          <Image
            src={linkedin}
            alt="insta logo"
            className="w-[43px] md:w-[104px] h-[43px] md:h-[104px]"
          />
          <p className="text-[12px] md:text-[16px] font-[400]">Instagram</p>
        </a>
        <a
          href="#"
          target="_blank"
          className="flex-1 flex flex-col justify-center items-center gap-2"
        >
          <Image
            src={twitter}
            alt="insta logo"
            className="w-[43px] md:w-[90px] h-[43px] md:h-[90px]"
          />
          <p className="text-[12px] md:text-[16px] font-[400]">Instagram</p>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
