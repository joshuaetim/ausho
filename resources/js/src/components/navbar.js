import React from "react";
import cn from "classnames";
import { useUncontrolled } from "uncontrollable";

import NavbarContext from "./navbar-context";
import SelectableContext from "./selectable-context";

const Navbar = React.forwardRef((props, ref) => {
  const {
    bg,
    width,
    onSelect,
    expanded,
    onToggle,
    className,
    orientation,
    collapseOnSelect
  } = useUncontrolled(props, { expanded: "onToggle" });

  const handleCollapse = React.useCallback(
    (...args) => {
      if (onSelect) onSelect(...args);
      if (collapseOnSelect && expanded) {
        if (onToggle) {
          onToggle(false);
        }
      }
    },
    [onSelect, onToggle, expanded, collapseOnSelect]
  );

  const classes = cn(
    "navbar",
    {
      [`navbar-${bg}`]: bg,
      [`navbar-expand-${width}`]: width,
      [`navbar-${orientation}`]: orientation
    },
    className
  );

  const navbarContext = React.useMemo(
    () => ({
      expanded: !!expanded,
      onToggle: () => onToggle && onToggle(!expanded)
    }),
    [onToggle, expanded]
  );

  return (
    <NavbarContext.Provider value={navbarContext}>
      <SelectableContext.Provider value={handleCollapse}>
        <header ref={ref} {...props} className={classes} />
      </SelectableContext.Provider>
    </NavbarContext.Provider>
  );
});

export default Navbar;
