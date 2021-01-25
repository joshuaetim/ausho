import React from "react";
import cn from "classnames";

const Card = React.forwardRef(({ as, width, ...props }, ref) => {
  const Component = as || "div";
  const classes = cn("card", { [`card-${width}`]: width });

  return <Component ref={ref} {...props} className={classes} />;
});

export default Card;
