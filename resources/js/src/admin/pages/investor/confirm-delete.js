import React from "react";

import Row from "../../../components/row";
import Col from "../../../components/col";
import Modal from "../../../components/modal";
import Button from "../../../components/button";
import ModalBody from "../../../components/modal-body";
import AlertIcon from "../../../icons/alert-triangle";
import ModalFooter from "../../../components/modal-footer";

const ConfirmDelete = ({ show, toggle, deleteInvestor }) => {
  return (
    <Modal size="sm" show={show} centered onHide={toggle}>
      <ModalBody className="text-center py-4">
        <AlertIcon />
        <h3>Are you sure?</h3>
        <div className="text-muted">
          Do you really want to delete the investor?
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="w-100">
          <Row>
            <Col>
              <Button variant="white" fullWidth onClick={toggle}>
                Cancel
              </Button>
            </Col>
            <Col>
              <Button variant="danger" fullWidth onClick={deleteInvestor}>
                Delete Investor
              </Button>
            </Col>
          </Row>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmDelete;
