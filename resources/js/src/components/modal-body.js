import React from "react";
import cn from "classnames";

const ModalBody = React.forwardRef(({ className, ...props }, ref) => {
  const classes = cn("modal-body", className);
  return <div {...props} ref={ref} className={classes} />;
});

export default ModalBody;
