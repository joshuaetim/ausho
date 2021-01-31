import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";

import Row from "../../../components/row";
import Col from "../../../components/col";
import ConfirmDelete from "./confirm-delete";
import Button from "../../../components/button";
import TextField from "../../../components/textfield";
import Container from "../../../components/container";
import {
  useFetchInvestor,
  useDeleteInvestor,
  useUpdateInvestor,
  usePermanentDeleteInvestor
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
  const [deleteModal, setDeleteModal] = React.useState(false);
  const { refetch: fetchInvestor, isFetching } = useFetchInvestor(slug);
  const investors = useQueryClient().getQueryData("investors");

  React.useEffect(() => {
    if (investors?.length) return;
    (async () => await fetchInvestor())();
  }, []);

  const investor = investors?.find(i => i?.slug === slug);

  const {
    isLoading: updating,
    mutateAsync: updateInvestor
  } = useUpdateInvestor(slug);

  const {
    isLoading: deleting,
    mutateAsync: deleteInvestor
  } = useDeleteInvestor(slug);

  const {
    isLoading: permanentlyDeleting,
    mutateAsync: permanentDeleteInvestor
  } = usePermanentDeleteInvestor(slug);

  const initialValues = {
    name: investor?.name,
    bank: investor?.bank,
    phone: investor?.phone,
    email: investor?.email,
    address: investor?.address,
    account_name: investor?.account_name,
    account_number: investor?.account_number
  };

  const toggleDeleteModal = () => setDeleteModal(!deleteModal);
  const handleUpdate = async values => await updateInvestor({ slug, values });
  const handleDelete = async () => {
    toggleDeleteModal();
    await deleteInvestor(slug);
  };
  const handlePermanentDelete = async () => {
    toggleDeleteModal();
    await permanentDeleteInvestor(slug);
  };

  if (isFetching) return <h1>FETCHING</h1>;

  return (
    <>
      <Container>
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
                      onClick={toggleDeleteModal}
                      isLoading={deleting || permanentlyDeleting}
                    >
                      Delete
                    </Button>
                  </Col>
                  <Col width={12} sm={3}>
                    <Button
                      fullWidth
                      type="submit"
                      variant="primary"
                      isLoading={updating}
                    >
                      Update Investor
                    </Button>
                  </Col>
                </Row>
              </Row>
            </form>
          )}
        </Formik>
      </Container>

      <ConfirmDelete
        show={deleteModal}
        toggle={toggleDeleteModal}
        deleteInvestor={handleDelete}
        permanentDeleteInvestor={handlePermanentDelete}
      />
    </>
  );
};

export default Investor;
