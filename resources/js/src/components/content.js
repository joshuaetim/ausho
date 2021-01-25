import React from "react";
import cn from "classnames";

const Content = ({ children, className }) => {
  const classes = cn("content", className);
  return <div className={classes}>{children}</div>;
};

export default Content;
