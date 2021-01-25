import React from "react";
import cn from "classnames";

const Card = React.forwardRef(
  ({ as, mb, center, className, ...props }, ref) => {
    const Component = as || "h2";
    const classes = cn(
      "card-title",
      { [`mb-${mb}`]: mb, "text-center": center },
      className
    );

    return <Component ref={ref} {...props} className={classes} />;
  }
);

export default Card;
