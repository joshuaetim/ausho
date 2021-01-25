import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

const NavLink = React.forwardRef(
  ({ icon, to = "#", title, className, children, ...props }, ref) => {
    const classes = cn("nav-link", className);

    return (
      <Link to={to} ref={ref} {...props} className={classes}>
        <React.Fragment>
          {icon ? (
            <>
              <span className="nav-link-icon d-inline-block">{icon}</span>
              <span className="nav-link-title">{title || children}</span>
            </>
          ) : (
            title || children
          )}
        </React.Fragment>
      </Link>
    );
  }
);

export default NavLink;
