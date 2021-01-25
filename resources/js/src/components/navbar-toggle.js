import React from "react";
import cn from "classnames";
import useEventCallback from "@restart/hooks/useEventCallback";

import NavbarContext from "./navbar-context";

const Icon = () => <span className="navbar-toggler-icon" />;

const NavbarToggle = React.forwardRef(({ onClick, ...props }, ref) => {
  const { onToggle, expanded } = React.useContext(NavbarContext) || {};

  const handleClick = useEventCallback(e => {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });

  const classes = cn("m-0", "navbar-toggler", { collapsed: !expanded });

  return (
    <button
      ref={ref}
      {...props}
      type="button"
      className={classes}
      onClick={handleClick}
      aria-expanded={expanded}
    >
      <Icon />
    </button>
  );
});

export default NavbarToggle;
