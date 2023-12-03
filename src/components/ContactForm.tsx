"use client";

import React, { FormEvent, useEffect, useState } from "react";
import CustomInput from "./CustomInput";
import axios from "axios";
import Toast from "./Toast";

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
  const [sendMailLoading, setSendMailLoading] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setSendMailLoading(true);
      const resAfterSendingEmail = await axios.post(
        "https://orange-red-giraffe-slip.cyclic.app/mail/sendEmail",
        inputs
      );
      // console.log(resAfterSendingEmail);
      setInputs(initialInputsData);
      setIsToastOpen(true);
    } catch (error) {
      console.log(error);
    } finally {
      setSendMailLoading(false);
    }
  };
  return (
    <>
      {isToastOpen && (
        <Toast setIsToastOpen={setIsToastOpen} isToastOpen={isToastOpen} />
      )}
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
              label="Email"
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
            className="w-full border rounded-md p-2"
            onChange={handleChange}
            value={inputs.subject}
          ></textarea>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="name" className="font-[600] ml-2">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            className="w-full border rounded-md p-2"
            onChange={handleChange}
            value={inputs.message}
          ></textarea>
          <div className="w-full flex justify-center items-center mt-4">
            <button className="w-[180px] flex justify-center items-center h-[45px] bg-[#0059b3] rounded-md text-white">
              {!sendMailLoading ? (
                "Submit"
              ) : (
                <div className="w-7 h-7 rounded-full border-[5px] border-r-blue-400 animate-spin"></div>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
