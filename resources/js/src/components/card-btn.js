import React from "react";
import cn from "classnames";

const CardButton = React.forwardRef(({ to, as, className, ...props }, ref) => {
  const Component = as || "span";
  const classes = cn("card-btn", className);

  return <Component to={to} ref={ref} {...props} className={classes} />;
});

export default CardButton;
