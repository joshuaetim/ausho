import React from "react";
import cn from "classnames";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => {
  const classes = cn("card-header", className);

  return <div ref={ref} {...props} className={classes} />;
});

export default CardHeader;
