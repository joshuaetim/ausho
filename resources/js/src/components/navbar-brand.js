import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

const NavbarBrand = React.forwardRef(
  (
    { as, src, alt, width, height = 32, className, autodark, ...props },
    ref
  ) => {
    const Component = as || "h1";
    const classes = cn(
      "navbar-brand",
      { "navbar-brand-autodark": autodark },
      className
    );
    return (
      <Component ref={ref} {...props} className={classes}>
        <Link to="/">
          <img
            alt={alt}
            src={src}
            width={width}
            height={height}
            className="navbar-brand-image"
          />
        </Link>
      </Component>
    );
  }
);

export default NavbarBrand;
