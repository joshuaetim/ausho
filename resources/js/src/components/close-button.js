import React from "react";
import cn from "classnames";

const CloseButton = React.forwardRef(({ label, onClick, ...props }, ref) => {
  const classes = cn("btn-close");
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={classes}
      {...props}
    >
      <span aria-hidden="true">&times;</span>
      <span className="sr-only">{label}</span>
    </button>
  );
});

export default CloseButton;
