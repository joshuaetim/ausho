import React from "react";
import cn from "classnames";

const FormLabel = React.forwardRef(({ label, className, ...props }, ref) => {
  const classes = cn("form-label", className);
  return <label ref={ref} {...props} className={classes} />;
});

export default FormLabel;
