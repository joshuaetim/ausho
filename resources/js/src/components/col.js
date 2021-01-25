import React from "react";
import cn from "classnames";

const Col = React.forwardRef(
  ({ as, sm, md, lg, xl, width, alignSelf, className, ...props }, ref) => {
    const Component = as || "div";

    const classes = cn(
      "col",
      {
        [`col-sm-${sm}`]: sm,
        [`col-md-${md}`]: md,
        [`col-lg-${lg}`]: lg,
        [`col-lg-${xl}`]: xl,
        [`col-${width}`]: width,
        [`align-self-${alignSelf}`]: alignSelf
      },
      className
    );
    return <Component ref={ref} {...props} className={classes} />;
  }
);

export default Col;
