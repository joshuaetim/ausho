import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import useEventCallback from "@restart/hooks/useEventCallback";

import SelectableContext, { makeEventKey } from "./selectable-context";

const DropdownItem = React.forwardRef(
  (
    {
      as,
      icon,
      href,
      onClick,
      to = "#",
      onSelect,
      eventKey,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const onSelectCtx = React.useContext(SelectableContext);

    const key = makeEventKey(eventKey, href);

    const handleClick = useEventCallback(event => {
      if (disabled) return;
      if (onClick) onClick(event);
      if (onSelectCtx) onSelectCtx(key, event);
      if (onSelect) onSelect(key, event);
    });

    const classes = cn("dropdown-item", className);
    const Component = as || Link;

    return (
      <Component
        to={to}
        ref={ref}
        {...props}
        disabled={disabled}
        className={classes}
        onClick={handleClick}
      >
        {icon && <span className="me-3">{icon}</span>}
        {children}
      </Component>
    );
  }
);

export default DropdownItem;
