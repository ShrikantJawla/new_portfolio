"use client";

import Image from "next/image";
import React, { useState } from "react";
import HomeIcon from "@/assets/Images/home-svgrepo-com 1.png";
import HamBurgerIcon from "@/assets/Images/icons8-hamburger.svg";
import ThemeSwither from "./ThemeSwither";
import closeIcon from "@/assets/Images/icons8-close.svg";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-[55px] md:h-[70px] sticky top-[10px] z-40 rounded-[--section_br_radius] bg-[--nav_bg] dark:bg-[#1A1A1A] flex justify-between items-center px-[12px] md:px-[20px] lg:px-[30px] xl:px-[53px]">
      <a href="#__home" className="hidden lg:flex">
        <Image
          src={HomeIcon}
          alt="Home Icon"
          height={35}
          width={35}
          className=""
        />
      </a>
      {[
        { title: "Skills", url: "__skills" },
        { title: "Projects", url: "__projects" },
        { title: "Stats", url: "__stats" },
        { title: "Contact", url: "__contacts" },
        { title: "Resume/CV", url: "__resume" },
      ].map((ele, ind) => (
        <a key={ind} className="group hidden lg:flex" href={`#${ele.url}`}>
          <p className="group text-[19px] font-[600] text-[#55505B] dark:text-white hover:scale-125 hover:text-[--theme_purple] hover:dark:text-[--theme_purple] transition-scale duration-300 transition-ease relative before:content-[''] before:absolute before:bottom-[-2px] before:height-[6px] before:w-[0] group-hover:before:w-full group-hover:before:border before:border-[--theme_purple] dark:before:border-white before:rounded-[50px] before:transition-width before:duration-[0.9s] before:transition-ease">
            {ele.title}
          </p>
        </a>
      ))}
      <ThemeSwither />
      <Image
        className="cursor-pointer lg:hidden"
        src={HamBurgerIcon}
        alt="HamBurgerIcon"
        height={29}
        width={29}
        onClick={() => setIsOpen(true)}
      />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;

function SideBar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Function;
}) {
  return (
    <div
      className={`w-[100vw] h-[100vh] flex flex-col justify-start items-center bg-[--theme_purple] z-50 fixed right-0 top-0 transition-all duration-1000 ease-in-out ${
        isOpen ? "clip_path_visible" : "clip_path_hidden"
      }`}
    >
      <div className="w-full h-[90px] flex justify-end items-center px-4 border-b">
        <Image
          src={closeIcon}
          alt="Close Button"
          className="transition-scale duration-300 ease-in-out cursor-pointer hover:scale-110"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {["Home", "Skills", "Projects", "Stats", "AboutUs"].map(
          (ele, ind, arr) => (
            <div className="group w-full px-16 py-2 " key={ind}>
              <p className="group text-3xl font-[600] text-white cursor-pointer relative before:content-[''] before:w-0  group-hover:before:border before:h-[4px] before:bg-white before-b-white before:absolute before:bottom-[-4px] before:transition-w before:duration-700 before:ease-in-out group-hover:before:w-full">
                {ele}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
