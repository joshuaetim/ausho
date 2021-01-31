import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";

import Row from "../components/row";
import Col from "../components/col";
import Modal from "../components/modal";
import Button from "../components/button";
import TextField from "../components/textfield";
import ModalBody from "../components/modal-body";
import ModalTitle from "../components/modal-title";
import ModalHeader from "../components/modal-header";
import { useCreateInvestor } from "../store/api/investors";

const values = {
  name: "Oluwasegun Victor",
  email: "arpeiks@gmail.com",
  phone: "07040508289",
  address: "Lakanre",
  bank: "GT Bank",
  account_name: "Alayemi Oluwasegun Victor",
  account_number: "0600114069"
};

const schema = Yup.object({
  email: Yup.string()
    .trim()
    .email()
    .required(),
  address: Yup.string()
    .trim()
    .required(),
  bank: Yup.string()
    .trim()
    .required(),
  phone: Yup.string()
    .length(11)
    .required(),
  account_number: Yup.string()
    .length(10)
    .required(),
  account_name: Yup.string()
    .trim()
    .matches("[a-zA-Z]{2,}[\\s]{1}[a-zA-Z]{2,}[\\s]{0}", "Invalid format")
    .required(),
  name: Yup.string()
    .trim()
    .matches("[a-zA-Z]{2,}[\\s]{1}[a-zA-Z]{2,}[\\s]{0}", "Invalid format")
    .required()
});

const CreateInvestor = ({ show, toggle }) => {
  const { isLoading, mutateAsync } = useCreateInvestor();

  const handleSubmit = async values => {
    const { success } = await mutateAsync(values);
    if (success) toggle();
  };

  return (
    <Modal size="md" centered show={show} onHide={toggle}>
      <ModalHeader closeButton onHide={toggle}>
        <ModalTitle>Create Investor</ModalTitle>
      </ModalHeader>
      <span className="modal-status bg-primary" />
      <ModalBody>
        <Formik
          initialValues={values}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({
            errors,
            values,
            touched,
            handleBlur,
            handleSubmit,
            handleChange
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Name"
                value={values.name}
                onBlur={handleBlur}
                feedback={errors.name}
                onChange={handleChange}
                placeholder="Firstname Lastname"
                error={touched.name && errors.name}
              />
              <TextField
                type="email"
                name="email"
                onBlur={handleBlur}
                value={values.email}
                label="Email address"
                feedback={errors.email}
                onChange={handleChange}
                placeholder="Enter email"
                error={touched.email && errors.email}
              />
              <TextField
                name="phone"
                label="Phone Number"
                onBlur={handleBlur}
                value={values.phone}
                onChange={handleChange}
                feedback={errors.phone}
                placeholder="Enter phone number"
                error={touched.phone && errors.phone}
              />
              <TextField
                rows={3}
                as="textarea"
                name="address"
                onBlur={handleBlur}
                label="Enter address"
                placeholder="address"
                value={values.address}
                onChange={handleChange}
                feedback={errors.address}
                error={touched.address && errors.address}
              />
              <TextField
                name="bank"
                label="Bank Name"
                onBlur={handleBlur}
                value={values.bank}
                feedback={errors.bank}
                onChange={handleChange}
                placeholder="Enter bank name"
                error={touched.bank && errors.bank}
              />
              <TextField
                name="account_name"
                onBlur={handleBlur}
                label="Account Name"
                onChange={handleChange}
                value={values.account_name}
                feedback={errors.account_name}
                placeholder="Enter account name"
                error={touched.account_name && errors.account_name}
              />
              <TextField
                onBlur={handleBlur}
                name="account_number"
                label="Account Number"
                onChange={handleChange}
                value={values.account_number}
                feedback={errors.account_number}
                placeholder="Enter account number"
                error={touched.account_number && errors.account_number}
              />
              <Row className="mt-4">
                <Col>
                  <Button fullWidth type="button" onClick={toggle}>
                    Cancel
                  </Button>
                </Col>
                <Col>
                  <Button
                    fullWidth
                    type="submit"
                    variant="primary"
                    disabled={isLoading}
                    isLoading={isLoading}
                  >
                    Create Investor
                  </Button>
                </Col>
              </Row>
            </form>
          )}
        </Formik>
      </ModalBody>
    </Modal>
  );
};

export default CreateInvestor;
