import React from "react";
import cn from "classnames";

const Box = React.forwardRef(
  (
    {
      as,
      bg,
      mt,
      mb,
      flex,
      align,
      muted,
      center,
      justify,
      flexGrow,
      fullHeight,
      className,
      direction,
      ...props
    },
    ref
  ) => {
    const Component = as || "div";

    const classes = cn(
      {
        "d-flex": flex,
        [`mt-${mt}`]: mt,
        [`mb-${mb}`]: mb,
        [`bg-${bg}`]: bg,
        "text-muted": muted,
        "text-center": center,
        "min-vh-100": fullHeight,
        [`flex-grow-1`]: flexGrow,
        [`align-items-${align}`]: align,
        [`flex-${direction}`]: direction,
        [`justify-content-${justify}`]: justify
      },
      className
    );

    return <Component ref={ref} {...props} className={classes} />;
  }
);

export default Box;
