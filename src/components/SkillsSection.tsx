import React from "react";
import HeaderSection from "./HeaderSection";
import SkillsBtns from "./SkillsBtns";

type Props = {};

const SkillsSection = (props: Props) => {
  return (
    <div className="w-full min-h-[600px] border">
      <HeaderSection child={<SkillsBtns />} />
    </div>
  );
};

export default SkillsSection;
