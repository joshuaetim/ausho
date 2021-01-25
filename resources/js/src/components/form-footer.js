import React from "react";
import cn from "classnames";

const FormFooter = React.forwardRef(({ className, ...props }, ref) => {
  const classes = cn("form-footer", className);
  return <div ref={ref} {...props} className={classes} />;
});

export default FormFooter;
