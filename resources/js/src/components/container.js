import React from "react";
import cn from "classnames";

const Container = React.forwardRef(
  ({ as, fluid, className, ...props }, ref) => {
    const Component = as || "div";
    const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
    const classes = cn(className, `container${suffix}`);

    return <Component ref={ref} className={classes} {...props} />;
  }
);

export default Container;
