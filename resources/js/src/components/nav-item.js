import React from "react";
import cn from "classnames";

const NavItem = React.forwardRef(({ as, className, ...props }, ref) => {
  const classes = cn("nav-item", className);
  const Component = as || "li";

  return <Component ref={ref} {...props} className={classes} />;
});

export default NavItem;
