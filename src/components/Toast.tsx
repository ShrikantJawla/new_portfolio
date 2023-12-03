import React, { useEffect, useRef } from "react";

type Props = { setIsToastOpen: Function; isToastOpen: boolean };

const Toast = (props: Props) => {
  const { setIsToastOpen, isToastOpen } = props;
  const timerId: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    if (isToastOpen) {
      timerId.current = setTimeout(() => {
        setIsToastOpen(false);
      }, 4000);
      return () => {
        clearTimeout(timerId.current as NodeJS.Timeout);
      };
    }
  }, [isToastOpen]);
  return (
    <div
      className="min-w-[320px] md:max-w-lg fixed bottom-0 md:bottom-5 right-[50%] translate-x-[50%] md:translate-x-[0%] md:right-5 z-[130] bg-green-400 text-sm text-white rounded-xl shadow-lg"
      role="alert"
    >
      <div className="flex p-4 text-[13px] md:text-[16px] font-[500]">
        ThankYou! <br /> I have received your Email and
        contact you soon!.
        <div className="ms-auto" onClick={() => setIsToastOpen(false)}>
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
          >
            <span className="sr-only">Close</span>
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
