import React from "react";
import cn from "classnames";

import Box from "./box";
import FormLabel from "./form-label";
import FormControl from "./form-control";

const TextField = React.forwardRef(
  (
    {
      as,
      rows,
      name,
      type,
      value,
      error,
      accept,
      onBlur,
      onChange,
      disabled,
      readOnly,
      feedback,
      margin = 3,
      placeholder,
      label,
      ...props
    },
    ref
  ) => {
    const classes = cn({ [`mb-${margin}`]: margin });

    return (
      <Box ref={ref} {...props} className={classes}>
        <FormLabel>{label}</FormLabel>
        <FormControl
          as={as}
          name={name}
          type={type}
          rows={rows}
          value={value}
          error={error}
          onBlur={onBlur}
          accept={accept}
          readOnly={readOnly}
          disabled={disabled}
          feedback={feedback}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Box>
    );
  }
);

export default TextField;
