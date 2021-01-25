import React from "react";
import cn from "classnames";

const CardBody = React.forwardRef(
  ({ shadow, className, scrollable, ...props }, ref) => {
    const classes = cn(
      "card-body",
      {
        "card-body-scrollable": scrollable,
        "card-body-scrollable-shadow": shadow
      },
      className
    );

    return <div ref={ref} {...props} className={classes} />;
  }
);

export default CardBody;
