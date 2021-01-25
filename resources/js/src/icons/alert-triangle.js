import React from "react";
import cn from "classnames";

const AlertTriangle = ({ size = "lg", color = "danger", className }) => {
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 9v2m0 4v.01" />
      <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
    </svg>
  );
};

export default AlertTriangle;