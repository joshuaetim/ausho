import React from "react";
import cn from "classnames";

const Apps = ({ size = "sm", color, className }) => {
  const classes = cn(
    "icon",
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  );
};

export default Apps;
