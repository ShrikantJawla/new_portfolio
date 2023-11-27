import React from "react";
import HeaderSection from "./HeaderSection";
import Image from "next/image";
import map from "@/assets/Images/map.png";
import message from "@/assets/Images/message.png";
import wattsapp from "@/assets/Images/whattsapp.png";
import illus from "@/assets/Images/Man with inflatable ring  3D Illustration.png";
import ContactForm from "./ContactForm";

type Props = {};

const ContactUsSection = (props: Props) => {
  return (
    <div className="w-full min-h-fit pb-5">
      <HeaderSection title="Get in touch" />
      <div className="w-full min-h-[100px] md:mt-5 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 text-[#273653] dark:text-gray-300">
        <div className="w-full md:w-[500px] h-fit lg:h-[360px] relative">
          <div className="w-full">
            <p className="text-[14px] md:text-[16px] font-[400]">
              If you’re looking for a developer with a broad skill set from
              concept and strategy to code, get in touch.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 mt-8">
            <div className="w-full flex items-center gap-5">
              <Image src={map} alt="map icon" width={30} height={30} />
              <p className="text-[14px] md:text-[16px] font-[400] text-[]">
                Currently in Panchkula
              </p>
            </div>
            <div className="w-full flex items-center gap-5">
              <Image src={message} alt="map icon" width={30} height={30} />
              <p className="text-[14px] md:text-[16px] font-[400] text-[]">
                Email: shrikantjawla@gmail.com
              </p>
            </div>
            <div className="w-full flex items-center gap-5">
              <Image src={wattsapp} alt="map icon" width={30} height={30} />
              <p className="text-[14px] md:text-[16px] font-[400] text-[]">
                Phone: +91 9069006661
              </p>
            </div>
          </div>
          <Image
            src={illus}
            alt="Illustration"
            width={191}
            height={191}
            className="hidden lg:flex absolute bottom-0 right-[-10%]"
          />
        </div>
        <div className="w-full md:w-[670px] h-fit lg:h-[383px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
