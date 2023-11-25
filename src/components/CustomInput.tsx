import React, { ChangeEventHandler } from "react";

type Props = {
  name: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  label: string;
};

const CustomInput = ({ label, name, value, handleChange, type }: Props) => {
  return (
    <>
      <label htmlFor="firstName" className="font-[600] ml-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full border rounded-md h-[40px] px-2"
        required
      />
    </>
  );
};

export default CustomInput;
