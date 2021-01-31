import React from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./modal";
import ModalBody from "./modal-body";
import CloseButton from "./close-button";
import CheckCircle from "../icons/check-circle";
import AlertTriangle from "../icons/alert-triangle";

const Icon = ({ type }) => {
  switch (type) {
    case "success":
      return <CheckCircle size="lg" color="green" />;
    case "danger":
      return <AlertTriangle size="lg" color="danger" />;
    default:
      return null;
  }
};

const AlertComponent = ({
  alert,
  handleHide,
  size = "sm",
  type = "success"
}) => {
  let messages = [];

  if (alert?.message?.length && alert.type === "danger") {
    messages = Object.values(alert?.message).map(i => i[0]);
  }

  if (!alert?.message) {
    alert.message = alert?.title;
    alert.title = "Server Error";
  }

  return (
    <Modal size={size} centered show={alert?.open} onHide={handleHide}>
      <CloseButton onClick={handleHide} />
      <span className={cn("modal-status", { [`bg-${type}`]: type })} />
      <ModalBody className="text-center py-4">
        <Icon type={type} />
        <h3>{alert?.title}</h3>
        {messages && messages?.length ? (
          messages.map(i => (
            <div key={i} className="text-muted">
              {i}
            </div>
          ))
        ) : (
          <div className="text-muted">{alert?.message}</div>
        )}
      </ModalBody>
    </Modal>
  );
};

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alert);
  const handleHide = () => dispatch({ type: "CLOSE_ALERT" });

  return (
    <AlertComponent alert={alert} type={alert?.type} handleHide={handleHide} />
  );
};

export default Alert;
