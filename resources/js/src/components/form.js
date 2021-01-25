import React from "react";

const Form = React.forwardRef(({ ...props }, ref) => {
  return <form {...props} ref={ref} />;
});

export default Form;
