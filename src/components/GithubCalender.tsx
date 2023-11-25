//@ts-nocheck

"use client";

import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactToolTip from "react-tooltip";
import HeaderSection from "./HeaderSection";

const selectLastHalfYear = (contributions: any) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 9;

  return contributions.filter((day: Day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

type Props = {};

const GithubCalender = (props: Props) => {
  return (
    <div className="w-full h-fit pb-5">
      <HeaderSection title="Github Calender" />

      <GitHubCalendar
        style={{ color: "black", marginTop: "20px", margin: "auto" }}
        transformData={selectLastHalfYear}
        blockSize={20}
        blockMargin={5}
        // fontSize={windowSize <= 350 ? 12 : 20}
        // fontSize={20}
        username="shrikantjawla"
        theme={{
          level0: "#F0F0F0",
          level1: "#1bcb53",
          level2: "#049231",
          level3: "#057228",
          level4: "#024617",
        }}
        // year={new Date().getFullYear() - 1}
      >
        <ReactToolTip html delayShow={20} />
      </GitHubCalendar>
    </div>
  );
};

export default GithubCalender;
