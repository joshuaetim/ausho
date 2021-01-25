import React from "react";
import cn from "classnames";

const Box = React.forwardRef(
  (
    {
      as,
      mt,
      mb,
      flex,
      align,
      muted,
      center,
      justify,
      fullHeight,
      className,
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
        "text-muted": muted,
        "text-center": center,
        "min-vh-100": fullHeight,
        [`align-items-${align}`]: align,
        [`justify-content-${justify}`]: justify
      },
      className
    );

    return <Component ref={ref} {...props} className={classes} />;
  }
);

export default Box;
