import Image from "next/image";
import React from "react";
import HomeIcon from "@/assets/Images/home-svgrepo-com 1.png";
import HamBurgerIcon from "@/assets/Images/icons8-hamburger.svg";
import ThemeSwither from "./ThemeSwither";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full h-[50px] md:h-[60px] rounded-[15px] bg-[--nav_bg] dark:bg-[#1A1A1A] flex justify-between items-center px-[12px] md:px-[20px] lg:px-[30px] xl:px-[53px]">
      <a href="#_home">
        <Image
          src={HomeIcon}
          alt="Home Icon"
          height={29}
          width={29}
          className="transition-all duration-500 motion-safe:animate-bounce hover:animate-none"
        />
      </a>
      {["Skills", "Projects", "About", "Contact", "Resume/CV"].map(
        (ele, ind) => (
          <a key={ind} className="group hidden lg:flex" href="#_skills">
            <p className="group text-[18px] font-[500] text-[#55505B] dark:text-white hover:scale-125 hover:text-[--theme_purple] hover:dark:text-[--theme_purple] transition-scale duration-300 transition-ease relative before:content-[''] before:absolute before:bottom-[-2px] before:height-[6px] before:w-[0] group-hover:before:w-full group-hover:before:border before:border-[--theme_purple] dark:before:border-white before:rounded-[50px] before:transition-width before:duration-[0.9s] before:transition-ease">
              {ele}
            </p>
          </a>
        )
      )}
      <ThemeSwither />
      <Image
        className="cursor-pointer lg:hidden"
        src={HamBurgerIcon}
        alt="HamBurgerIcon"
        height={29}
        width={29}
      />
    </div>
  );
};

export default Navbar;
