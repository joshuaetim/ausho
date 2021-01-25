import classNames from "classnames";
import transitionEnd from "dom-helpers/transitionEnd";
import React, { useCallback } from "react";
import Transition, {
  ENTERED,
  ENTERING
} from "react-transition-group/Transition";
import triggerBrowserReflow from "./trigger-browser-reflow";

const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};

const fadeStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};

const Fade = React.forwardRef(({ className, children, ...props }, ref) => {
  const handleEnter = useCallback(
    node => {
      triggerBrowserReflow(node);
      if (props.onEnter) props.onEnter(node);
    },
    [props]
  );

  return (
    <Transition
      ref={ref}
      addEndListener={transitionEnd}
      {...props}
      onEnter={handleEnter}
    >
      {(status, innerProps) =>
        React.cloneElement(children, {
          ...innerProps,
          className: classNames(
            "fade",
            className,
            children.props.className,
            fadeStyles[status]
          )
        })
      }
    </Transition>
  );
});

Fade.defaultProps = defaultProps;

export default Fade;
