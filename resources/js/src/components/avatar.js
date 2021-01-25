import React from "react";
import cn from "classnames";

const Avatar = React.forwardRef(
  ({ bg, img, size, color, round, className, ...props }, ref) => {
    const classes = cn(
      "avatar",
      {
        [`bg-${bg}`]: bg,
        "avatar-rounded": round,
        [`avatar-${size}`]: size,
        [`text-${color}`]: color
      },
      className
    );

    return (
      <span
        {...props}
        ref={ref}
        className={classes}
        style={{ backgroundImage: `url(${img})` }}
      />
    );
  }
);

export default Avatar;
