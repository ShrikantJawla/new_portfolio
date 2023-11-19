import React from "react";

type Props = {};

const SkillsBtns = (props: Props) => {
  return (
    <div className="flex gap-2">
      <button className="border h-[34px] px-4 text-[16px] transition-all duration-500 hover:text-white hover:bg-[--theme_purple] leading-[20px] rounded-[5px]">
        All
      </button>
      <button className="border h-[34px] px-4 text-[16px] transition-all duration-500 hover:text-white hover:bg-[--theme_purple] leading-[20px] rounded-[5px]">
        FrontEnd
      </button>
      <button className="border h-[34px] px-4 text-[16px] transition-all duration-500 hover:text-white hover:bg-[--theme_purple] leading-[20px] rounded-[5px]">
        BackEnd
      </button>
    </div>
  );
};

export default SkillsBtns;
