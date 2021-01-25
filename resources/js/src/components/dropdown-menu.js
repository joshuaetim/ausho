import React from "react";
import cn from "classnames";
import { useDropdownMenu } from "react-overlays/DropdownMenu";

const DropdownMenu = React.forwardRef(
  (
    {
      card,
      arrow,
      style,
      className,
      alignRight,
      renderOnMount,
      rootCloseEvent,
      show: showProps,
      position = "end",
      ...props
    },
    ref
  ) => {
    const { show, hasShown, props: menuProps } = useDropdownMenu({
      flip: true,
      rootCloseEvent,
      offset: [0, 10],
      show: showProps,
      alignEnd: alignRight
    });

    if (style === null) menuProps.style = style;
    if (!hasShown && !renderOnMount) return null;

    const classes = cn(
      "dropdown-menu",
      {
        show,
        "dropdown-menu-card": card,
        "dropdown-menu-arrow": arrow,
        [`dropdown-menu-${position}`]: position
      },
      className
    );

    return <div ref={ref} {...props} {...menuProps} className={classes} />;
  }
);

export default DropdownMenu;
