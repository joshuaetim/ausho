import React from "react";
import cn from "classnames";

const FormControl = React.forwardRef(
  ({ as, error, margin, readOnly, feedback, ...props }, ref) => {
    const Component = as || "input";
    const classes = cn("form-control", {
      "mb-3": margin,
      "is-invalid": !!error
    });

    return (
      <React.Fragment>
        <Component
          ref={ref}
          {...props}
          readOnly={readOnly}
          className={classes}
        />
        {feedback && <span className="invalid-feedback">{feedback}</span>}
      </React.Fragment>
    );
  }
);

export default FormControl;
