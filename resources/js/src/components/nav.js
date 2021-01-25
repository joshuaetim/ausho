import React from "react";
import cn from "classnames";

const Nav = React.forwardRef(({ className, direction, ...props }, ref) => {
  const classes = cn(
    "navbar-nav",
    { [`flex-${direction}`]: direction },
    className
  );

  return <ul ref={ref} {...props} className={classes} />;
});

export default Nav;
