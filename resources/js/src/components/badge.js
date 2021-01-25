import React from "react";
import cn from "classnames";

const Badge = React.forwardRef(
  ({ pill, color = "success", className, ...props }, ref) => {
    const classes = cn(
      "badge",
      { [`bg-${color}`]: color, "badge-pill": pill },
      className
    );
    return <span {...props} ref={ref} className={classes} />;
  }
);

export default Badge;
