import React from "react";
import { ISkillsArrays } from "./SkillsSection";

type Props = {
  skillsArray: ISkillsArrays[];
  selectedType: string;
  handleChangeType: (newType: string) => void;
};

const SkillsBtns = (props: Props) => {
  const { skillsArray } = props;
  const uniqueSkillTypesArr = getArrayOfUniqueSkillsType({ skillsArray });
  // console.log(uniqueSkillTypesArr);
  return (
    <div className="w-[350px] md:w-full overflow-auto flex gap-2">
      {uniqueSkillTypesArr.map((ele, ind) => (
        <button
          key={ind}
          onClick={() => props.handleChangeType(ele)}
          className={`border min-w-[100px] min-h-[34px] px-4 text-[16px] transition-all duration-500 hover:text-white ${
            ele == props.selectedType
              ? "bg-[--theme_purple] text-white"
              : "bg-inherit"
          } hover:bg-[--theme_purple] capitalize leading-[20px] rounded-[5px] dark:text-white`}
        >
          {ele}
        </button>
      ))}
    </div>
  );
};

export default SkillsBtns;

function getArrayOfUniqueSkillsType({
  skillsArray,
}: {
  skillsArray: ISkillsArrays[];
}) {
  let uniqueSkillTypesSet = new Set();
  skillsArray?.forEach((ele) => {
    if (ele?.skillType?.length) {
      ele.skillType.forEach((element) => uniqueSkillTypesSet.add(element));
    }
  });
  let uniqueSkillTypesArr: string[] = [];
  uniqueSkillTypesSet.forEach((ele) => uniqueSkillTypesArr.push(ele as string));
  // console.log(uniqueSkillTypesArr);
  return uniqueSkillTypesArr;
}
