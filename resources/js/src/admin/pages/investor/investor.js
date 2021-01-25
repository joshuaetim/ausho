import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useParams } from "react-router-dom";

import Row from "../../../components/row";
import Col from "../../../components/col";
import Button from "../../../components/button";
import TextField from "../../../components/textfield";
import {
  useFetchInvestor,
  useDeleteInvestor,
  useUpdateInvestor
} from "../../../store/api/investors";

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

const Investor = () => {
  const { slug } = useParams();
  const { mutateAsync: deleteInvestor } = useDeleteInvestor();
  const { mutateAsync: updateInvestor } = useUpdateInvestor();
  const { data: investor, refetch, isLoading } = useFetchInvestor(slug);

  if (isLoading) return <p>Loading</p>;

  const initialValues = {
    name: investor?.data?.name,
    bank: investor?.data?.bank,
    phone: investor?.data?.phone,
    email: investor?.data?.email,
    address: investor?.data?.address,
    account_name: investor?.data?.account_name,
    account_number: investor?.data?.account_number
  };

  const handleDelete = async () => deleteInvestor(slug);
  const handleUpdate = async values => {
    await updateInvestor({ slug, values });
    refetch();
  };

  return (
    <Formik
      onSubmit={handleUpdate}
      validationSchema={schema}
      initialValues={initialValues}
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
          <Row>
            <Col width={12} sm={6} md={6}>
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
            </Col>
            <Col width={12} sm={6} md={6}>
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
            </Col>
            <Col width={12} sm={6} md={6}>
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
            </Col>
            <Col width={12} sm={6} md={6}>
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
            </Col>
            <Col width={12} sm={6} md={6}>
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
            </Col>
            <Col width={12} sm={6} md={6}>
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
            </Col>
            <Col width={12} sm={12} md={6}>
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
            </Col>
            <Row className="mt-4">
              <Col width={12} sm={3}>
                <Button
                  fullWidth
                  type="button"
                  variant="danger"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </Col>
              <Col width={12} sm={3}>
                <Button
                  fullWidth
                  type="submit"
                  variant="primary"
                  // disabled={isLoading}
                  // isLoading={isLoading}
                >
                  Update Investor
                </Button>
              </Col>
            </Row>
          </Row>
        </form>
      )}
    </Formik>
  );
};

export default Investor;
