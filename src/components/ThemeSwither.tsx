"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import nightModeIcon from "@/assets/Images/night-mode 1.png";
import useTheme from "next-theme";

type Props = {};

const ThemeSwither = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <Image
      className="cursor-pointer "
      src={nightModeIcon}
      alt="NightModeIcon"
      height={29}
      width={29}
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    />
  );
};

export default ThemeSwither;
