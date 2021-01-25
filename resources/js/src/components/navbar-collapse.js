import React from "react";
import cn from "classnames";

import Collapse from "./collapse";
import NavbarContext from "./navbar-context";

const NavbarCollapse = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = cn("navbar-collapse", className);

    return (
      <NavbarContext.Consumer>
        {context => (
          <Collapse in={context?.expanded} {...props}>
            <div ref={ref} className={classes}>
              {children}
            </div>
          </Collapse>
        )}
      </NavbarContext.Consumer>
    );
  }
);

export default NavbarCollapse;
