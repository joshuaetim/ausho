import React from "react";

const ModalTitle = React.forwardRef((props, ref) => {
  return <h5 {...props} ref={ref} className="modal-title" />;
});

export default ModalTitle;
