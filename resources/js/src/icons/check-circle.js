import React from "react";
import cn from "classnames";

const CircleCheck = ({ size = "lg", color = "green", className }) => {
  const classes = cn(
    "icon",
    "mb-3",
    { [`icon-${size}`]: size, [`text-${color}`]: color },
    className
  );
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      strokeWidth="2"
      className={classes}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M9 12l2 2l4 -4"></path>
    </svg>
  );
};

export default CircleCheck;
