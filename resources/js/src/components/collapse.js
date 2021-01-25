import classNames from "classnames";
import css from "dom-helpers/css";
import transitionEnd from "dom-helpers/transitionEnd";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import Transition, {
  ENTERED,
  ENTERING,
  EXITED,
  EXITING
} from "react-transition-group/Transition";
import createChainedFunction from "./create-chained-function";
import triggerBrowserReflow from "./trigger-browser-reflow";

const MARGINS = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};

function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];

  return (
    value +
    // @ts-ignore
    parseInt(css(elem, margins[0]), 10) +
    // @ts-ignore
    parseInt(css(elem, margins[1]), 10)
  );
}

const collapseStyles = {
  [EXITED]: "collapse",
  [EXITING]: "collapsing",
  [ENTERING]: "collapsing",
  [ENTERED]: "collapse show"
};

const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};

const Collapse = React.forwardRef(
  (
    {
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      className,
      children,
      dimension = "height",
      getDimensionValue = getDefaultDimensionValue,
      ...props
    },
    ref
  ) => {
    /* Compute dimension */
    const computedDimension =
      typeof dimension === "function" ? dimension() : dimension;

    /* -- Expanding -- */
    const handleEnter = useMemo(
      () =>
        createChainedFunction(elem => {
          elem.style[computedDimension] = "0";
        }, onEnter),
      [computedDimension, onEnter]
    );

    const handleEntering = useMemo(
      () =>
        createChainedFunction(elem => {
          const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(
            1
          )}`;
          elem.style[computedDimension] = `${elem[scroll]}px`;
        }, onEntering),
      [computedDimension, onEntering]
    );

    const handleEntered = useMemo(
      () =>
        createChainedFunction(elem => {
          elem.style[computedDimension] = null;
        }, onEntered),
      [computedDimension, onEntered]
    );

    /* -- Collapsing -- */
    const handleExit = useMemo(
      () =>
        createChainedFunction(elem => {
          elem.style[computedDimension] = `${getDimensionValue(
            computedDimension,
            elem
          )}px`;
          triggerBrowserReflow(elem);
        }, onExit),
      [onExit, getDimensionValue, computedDimension]
    );
    const handleExiting = useMemo(
      () =>
        createChainedFunction(elem => {
          elem.style[computedDimension] = null;
        }, onExiting),
      [computedDimension, onExiting]
    );

    return (
      <Transition
        ref={ref}
        addEndListener={transitionEnd}
        {...props}
        aria-expanded={props.role ? props.in : null}
        onEnter={handleEnter}
        onEntering={handleEntering}
        onEntered={handleEntered}
        onExit={handleExit}
        onExiting={handleExiting}
      >
        {(state, innerProps) => {
          return React.cloneElement(children, {
            ...innerProps,
            className: classNames(
              className,
              children.props.className,
              collapseStyles[state],
              computedDimension === "width" && "width"
            )
          });
        }}
      </Transition>
    );
  }
);

Collapse.defaultProps = defaultProps;

export default Collapse;