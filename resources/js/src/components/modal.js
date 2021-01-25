import classNames from "classnames";
import addEventListener from "dom-helpers/addEventListener";
import canUseDOM from "dom-helpers/canUseDOM";
import ownerDocument from "dom-helpers/ownerDocument";
import removeEventListener from "dom-helpers/removeEventListener";
import getScrollbarSize from "dom-helpers/scrollbarSize";
import useCallbackRef from "@restart/hooks/useCallbackRef";
import useEventCallback from "@restart/hooks/useEventCallback";
import useWillUnmount from "@restart/hooks/useWillUnmount";
import transitionEnd from "dom-helpers/transitionEnd";
import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from "react";
import BaseModal, { ModalProps } from "react-overlays/Modal";
import warning from "warning";
import BootstrapModalManager from "./modal-manager";
import Fade from "./fade";
import ModalContext from "./modal-context";
import ModalDialog from "./modal-dialog";

let manager;

const defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: ModalDialog
};

/* eslint-disable no-use-before-define, react/no-multi-comp */
function DialogTransition(props) {
  return <Fade {...props} />;
}

function BackdropTransition(props) {
  return <Fade {...props} />;
}

/* eslint-enable no-use-before-define */

const Modal = React.forwardRef(
  (
    {
      bsPrefix,
      className,
      style,
      dialogClassName,
      contentClassName,
      children,
      dialogAs: Dialog,
      "aria-labelledby": ariaLabelledby,

      /* BaseModal props */

      show,
      blur = true,
      animation,
      backdrop,
      keyboard,
      onEscapeKeyDown,
      onShow,
      onHide,
      container,
      autoFocus,
      enforceFocus,
      restoreFocus,
      restoreFocusOptions,
      onEntered,
      onExit,
      onExiting,
      onEnter,
      onEntering,
      onExited,
      backdropClassName,
      manager: propsManager,
      ...props
    },
    ref
  ) => {
    const [modalStyle, setStyle] = useState({});
    const [animateStaticModal, setAnimateStaticModal] = useState(false);
    const waitingForMouseUpRef = useRef(false);
    const ignoreBackdropClickRef = useRef(false);
    const removeStaticModalAnimationRef = useRef(null);

    // TODO: what's this type
    const [modal, setModalRef] = useCallbackRef();
    const handleHide = useEventCallback(onHide);

    bsPrefix = "modal";

    useImperativeHandle(
      ref,
      () => ({
        get _modal() {
          warning(
            false,
            "Accessing `_modal` is not supported and will be removed in a future release"
          );
          return modal;
        }
      }),
      [modal]
    );

    const modalContext = useMemo(
      () => ({
        onHide: handleHide
      }),
      [handleHide]
    );

    function getModalManager() {
      if (propsManager) return propsManager;
      if (!manager) manager = new BootstrapModalManager();
      return manager;
    }

    function updateDialogStyle(node) {
      if (!canUseDOM) return;

      const containerIsOverflowing = getModalManager().isContainerOverflowing(
        modal
      );

      const modalIsOverflowing =
        node.scrollHeight > ownerDocument(node).documentElement.clientHeight;

      setStyle({
        paddingRight:
          containerIsOverflowing && !modalIsOverflowing
            ? getScrollbarSize()
            : undefined,
        paddingLeft:
          !containerIsOverflowing && modalIsOverflowing
            ? getScrollbarSize()
            : undefined
      });
    }

    const handleWindowResize = useEventCallback(() => {
      if (modal) {
        updateDialogStyle(modal.dialog);
      }
    });

    useWillUnmount(() => {
      removeEventListener(window, "resize", handleWindowResize);

      if (removeStaticModalAnimationRef.current) {
        removeStaticModalAnimationRef.current();
      }
    });

    // We prevent the modal from closing during a drag by detecting where the
    // the click originates from. If it starts in the modal and then ends outside
    // don't close.
    const handleDialogMouseDown = () => {
      waitingForMouseUpRef.current = true;
    };

    const handleMouseUp = e => {
      if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
        ignoreBackdropClickRef.current = true;
      }
      waitingForMouseUpRef.current = false;
    };

    const handleStaticModalAnimation = () => {
      setAnimateStaticModal(true);
      removeStaticModalAnimationRef.current = transitionEnd(
        modal.dialog,
        () => {
          setAnimateStaticModal(false);
        }
      );
    };

    const handleStaticBackdropClick = e => {
      if (e.target !== e.currentTarget) {
        return;
      }

      handleStaticModalAnimation();
    };

    const handleClick = e => {
      if (backdrop === "static") {
        handleStaticBackdropClick(e);
        return;
      }

      if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
        ignoreBackdropClickRef.current = false;
        return;
      }

      onHide();
    };

    const handleEscapeKeyDown = e => {
      if (!keyboard && backdrop === "static") {
        // Call preventDefault to stop modal from closing in react-overlays,
        // then play our animation.
        e.preventDefault();
        handleStaticModalAnimation();
      } else if (keyboard && onEscapeKeyDown) {
        onEscapeKeyDown(e);
      }
    };

    const handleEnter = (node, ...args) => {
      if (node) {
        node.style.display = "block";
        updateDialogStyle(node);
      }

      if (onEnter) onEnter(node, ...args);
    };

    const handleExit = (node, ...args) => {
      if (removeStaticModalAnimationRef.current) {
        removeStaticModalAnimationRef.current();
      }

      if (onExit) onExit(node, ...args);
    };

    const handleEntering = (node, ...args) => {
      if (onEntering) onEntering(node, ...args);

      // FIXME: This should work even when animation is disabled.
      addEventListener(window, "resize", handleWindowResize);
    };

    const handleExited = (node, ...args) => {
      if (node) node.style.display = ""; // RHL removes it sometimes
      if (onExited) onExited(...args);

      // FIXME: This should work even when animation is disabled.
      removeEventListener(window, "resize", handleWindowResize);
    };

    const renderBackdrop = useCallback(
      backdropProps => (
        <div
          {...backdropProps}
          className={classNames(
            `${bsPrefix}-backdrop`,
            backdropClassName,
            !animation && "show"
          )}
        />
      ),
      [animation, backdropClassName, bsPrefix]
    );

    const baseModalStyle = { ...style, ...modalStyle };

    // Sets `display` always block when `animation` is false
    if (!animation) {
      baseModalStyle.display = "block";
    }

    const renderDialog = dialogProps => (
      <div
        role="dialog"
        {...dialogProps}
        style={baseModalStyle}
        className={classNames(
          className,
          bsPrefix,
          animateStaticModal && `${bsPrefix}-static`,
          { "modal-blur": blur }
        )}
        onClick={backdrop ? handleClick : undefined}
        onMouseUp={handleMouseUp}
        aria-labelledby={ariaLabelledby}
      >
        {/*
        // @ts-ignore */}
        <Dialog
          {...props}
          onMouseDown={handleDialogMouseDown}
          className={dialogClassName}
          contentClassName={contentClassName}
        >
          {children}
        </Dialog>
      </div>
    );

    return (
      <ModalContext.Provider value={modalContext}>
        <BaseModal
          show={show}
          ref={setModalRef}
          backdrop={backdrop}
          container={container}
          keyboard // Always set true - see handleEscapeKeyDown
          autoFocus={autoFocus}
          enforceFocus={enforceFocus}
          restoreFocus={restoreFocus}
          restoreFocusOptions={restoreFocusOptions}
          onEscapeKeyDown={handleEscapeKeyDown}
          onShow={onShow}
          onHide={onHide}
          onEnter={handleEnter}
          onEntering={handleEntering}
          onEntered={onEntered}
          onExit={handleExit}
          onExiting={onExiting}
          onExited={handleExited}
          manager={getModalManager()}
          containerClassName={`${bsPrefix}-open`}
          transition={animation ? DialogTransition : undefined}
          backdropTransition={animation ? BackdropTransition : undefined}
          renderBackdrop={renderBackdrop}
          renderDialog={renderDialog}
        />
      </ModalContext.Provider>
    );
  }
);

Modal.defaultProps = defaultProps;

Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;

export default Modal;
