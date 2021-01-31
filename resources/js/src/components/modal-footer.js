import React from "react";

const ModalFooter = React.forwardRef((props, ref) => {
  return <div {...props} ref={ref} className="modal-footer" />;
});

export default ModalFooter;
