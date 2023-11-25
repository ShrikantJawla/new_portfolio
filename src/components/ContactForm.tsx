"use client";

import React, { FormEvent, useState } from "react";
import CustomInput from "./CustomInput";

interface IInputsData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialInputsData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type Props = {};

const ContactForm = (props: Props) => {
  const [inputs, setInputs] = useState<IInputsData>(initialInputsData);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
      <div className="w-full flex flex-col md:flex-row gap-3">
        <div className="flex flex-col w-full md:w-1/2 gap-1">
          <CustomInput
            name="name"
            value={inputs.name}
            handleChange={handleChange}
            label="First Name"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-1">
          <CustomInput
            name="email"
            value={inputs.email}
            handleChange={handleChange}
            label="Last Name"
            type="email"
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="name" className="font-[600] ml-2">
          Subject
        </label>
        <textarea
          name="subject"
          rows={2}
          className="w-full border rounded-md"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="name" className="font-[600] ml-2">
          Message
        </label>
        <textarea
          name="subject"
          rows={5}
          className="w-full border rounded-md"
          onChange={handleChange}
        ></textarea>
        <div className="w-full flex justify-center items-center mt-4">
          <button className="w-[180px] h-[40px] bg-[#0059b3] rounded-md text-white">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
