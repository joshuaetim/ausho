import React from "react";
import cn from "classnames";

const Users = ({ size = "sm", color, className }) => {
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
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
    </svg>
  );
};

export default Users;
