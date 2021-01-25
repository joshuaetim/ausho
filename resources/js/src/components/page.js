import React from "react";

const Page = React.forwardRef(({ ...props }, ref) => {
  return <div ref={ref} {...props} className="page" />;
});

export default Page;
