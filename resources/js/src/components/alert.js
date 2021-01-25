import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./modal";
import ModalBody from "./modal-body";
import CloseButton from "./close-button";
import CheckCircle from "../icons/check-circle";
import AlertTriangle from "../icons/alert-triangle";

const Icon = type => {
  switch (type) {
    case "success":
      return <CheckCircle size="lg" color="green" />;
    case "danger":
      <AlertTriangle size="lg" color="danger" />;
    default:
      return <CheckCircle size="lg" color="red" />;
  }
};

const AlertComponent = ({ size = "sm", type, alert, handleHide }) => {
  return (
    <Modal size={size} centered show={alert?.open} onHide={handleHide}>
      <CloseButton onClick={handleHide} />
      <span className={cn("modal-status", { [`bg-${type}`]: type })} />
      <ModalBody className="text-center py-4">
        <Icon type={type} />
        <h3>{alert?.title}</h3>
        <div className="text-muted">{alert?.message}</div>
      </ModalBody>
    </Modal>
  );
};

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alert);
  const handleHide = () => dispatch({ type: "CLOSE_ALERT" });

  return (
    <AlertComponent alert={alert} type={alert.type} handleHide={handleHide} />
  );
};

export default Alert;
