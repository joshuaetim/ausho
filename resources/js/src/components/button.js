import React from "react";
import cn from "classnames";

const Button = React.forwardRef(
  ({ isLoading, fullWidth, variant, className, ...props }, ref) => {
    const classes = cn(
      "btn",
      {
        "w-100": fullWidth,
        "btn-loading": isLoading,
        [`btn-${variant}`]: variant
      },
      className
    );
    return (
      <button disabled={isLoading} ref={ref} {...props} className={classes} />
    );
  }
);

export default Button;
