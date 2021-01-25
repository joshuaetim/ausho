import React from "react";
import cn from "classnames";
import useMergedRefs from "@restart/hooks/useMergedRefs";
import { useDropdownToggle } from "react-overlays/DropdownToggle";

import Button from "./button";

const DropdownToggle = React.forwardRef(({ as, className, ...pprops }, ref) => {
  const Component = as || Button;

  const [props, { show, toggle }] = useDropdownToggle();
  props.ref = useMergedRefs(props.ref, ref);

  const classes = cn("cursor-pointer", { show }, className);

  return (
    <Component {...props} {...pprops} onClick={toggle} className={classes} />
  );
});

export default DropdownToggle;
