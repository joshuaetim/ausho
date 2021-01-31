import React from "react";

import Row from "../../../components/row";
import Col from "../../../components/col";
import Modal from "../../../components/modal";
import Button from "../../../components/button";
import ModalBody from "../../../components/modal-body";
import AlertIcon from "../../../icons/alert-triangle";
import ModalFooter from "../../../components/modal-footer";

const ConfirmDelete = ({
  show,
  toggle,
  deleteInvestor,
  permanentDeleteInvestor
}) => {
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
            <Col width={12} sm={6}>
              <Button
                fullWidth
                variant="danger"
                onClick={permanentDeleteInvestor}
              >
                Permanently Delete
              </Button>
            </Col>
            <Col className="mt-2 mt-sm-0" width={12} sm={6}>
              <Button className="text-red" fullWidth onClick={deleteInvestor}>
                Safe Delete
              </Button>
            </Col>
            <Col width={12} className="mt-2">
              <Button fullWidth onClick={toggle}>
                Cancel
              </Button>
            </Col>
          </Row>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmDelete;
