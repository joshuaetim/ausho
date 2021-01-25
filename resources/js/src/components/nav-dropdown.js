import React from "react";
import cn from "classnames";

import NavItem from "./nav-item";
import Dropdown from "./dropdown";
import DropdownMenu from "./dropdown-menu";
import DropdownToggle from "./dropdown-toggle";

const NavDropdown = React.forwardRef(
  (
    {
      flex,
      drop,
      card,
      caret,
      title,
      arrow,
      menuRole,
      children,
      tChildren,
      tClassName,
      tAs = "span",
      rootCloseEvent,
      renderMenuOnMount,
      ...props
    },
    ref
  ) => {
    const tClasses = cn(
      "nav-link",
      { flex: "d-flex", "dropdown-toggle": caret },
      tClassName
    );

    return (
      <Dropdown ref={ref} drop={drop} as={NavItem} {...props}>
        <DropdownToggle as={tAs} className={tClasses}>
          {title || tChildren}
        </DropdownToggle>

        <DropdownMenu
          card={card}
          style={null}
          arrow={arrow}
          role={menuRole}
          rootCloseEvent={rootCloseEvent}
          renderOnMount={renderMenuOnMount}
        >
          {children}
        </DropdownMenu>
      </Dropdown>
    );
  }
);

export default NavDropdown;
