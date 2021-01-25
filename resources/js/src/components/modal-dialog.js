import classNames from "classnames";
import React from "react";

const ModalDialog = React.forwardRef(
  (
    {
      bsPrefix,
      className,
      contentClassName,
      centered,
      size,
      children,
      scrollable,
      ...props
    },
    ref
  ) => {
    bsPrefix = "modal";
    const dialogClass = `${bsPrefix}-dialog`;

    return (
      <div
        {...props}
        ref={ref}
        className={classNames(
          dialogClass,
          className,
          size && `${bsPrefix}-${size}`,
          centered && `${dialogClass}-centered`,
          scrollable && `${dialogClass}-scrollable`
        )}
      >
        <div className={classNames(`${bsPrefix}-content`, contentClassName)}>
          {children}
        </div>
      </div>
    );
  }
);

export default ModalDialog;
