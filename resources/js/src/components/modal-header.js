import React from "react";
import useEventCallback from "@restart/hooks/useEventCallback";

import CloseButton from "./close-button";
import ModalContext from "./modal-context";

const ModalHeader = React.forwardRef(
  ({ onHide, closeButton, closeLabel, children, ...props }, ref) => {
    const context = React.useContext(ModalContext);

    const handleClick = useEventCallback(() => {
      if (context) context.onHide();
      if (onHide) onHide();
    });

    return (
      <div {...props} ref={ref} className="modal-header">
        {children}
        {closeButton && (
          <CloseButton label={closeLabel} onClick={handleClick} />
        )}
      </div>
    );
  }
);

export default ModalHeader;
