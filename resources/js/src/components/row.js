import React from "react";
import cn from "classnames";

const Row = React.forwardRef(
  ({ deck, cards, align, className, ...props }, ref) => {
    const classes = cn(
      "row",
      {
        [`row-deck`]: deck,
        [`row-cards`]: cards,
        [`align-items-${align}`]: align
      },
      className
    );

    return <div ref={ref} {...props} className={classes} />;
  }
);

export default Row;
