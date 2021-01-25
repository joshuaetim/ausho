import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Link } from "react-router-dom";

import Box from "../../components/box";
import Card from "../../components/card";
import Form from "../../components/form";
import Button from "../../components/button";
import { useRegister } from "../../store/api/auth";
import CardBody from "../../components/card-body";
import Container from "../../components/container";
import TextField from "../../components/textfield";
import CardTitle from "../../components/card-title";
import FormFooter from "../../components/form-footer";

const values = {
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
};

const schema = Yup.object({
  email: Yup.string()
    .trim()
    .email()
    .required(),
  password: Yup.string()
    .min(8)
    .required(),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")])
    .required(),
  name: Yup.string()
    .trim()
    .matches("[a-zA-Z]{2,}[\\s]{1}[a-zA-Z]{2,}[\\s]{0}", "Invalid format")
    .required()
});

const Signup = () => {
  const { mutateAsync, isLoading } = useRegister();
  const handleSubmit = async values => await mutateAsync(values);

  return (
    <Box
      flex
      fullHeight
      align="center"
      justify="center"
      className="border-top-wide border-primary"
    >
      <Container fluid="tight">
        <Box center mb={4}>
          <Link to="">
            <img src="/img/tabler.svg" height={36} />
          </Link>
        </Box>
        <Box>
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
              <Card as={Form} width="md" onSubmit={handleSubmit}>
                <CardBody>
                  <CardTitle mb={4} center>
                    Create new account
                  </CardTitle>
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
                    name="password"
                    type="password"
                    label="Password"
                    onBlur={handleBlur}
                    value={values.password}
                    onChange={handleChange}
                    feedback={errors.password}
                    placeholder="Enter password"
                    error={touched.password && errors.password}
                  />
                  <TextField
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Confirm Password"
                    name="password_confirmation"
                    placeholder="Confirm password"
                    value={values.password_confirmation}
                    feedback={errors.password_confirmation}
                    error={
                      touched.password_confirmation &&
                      errors.password_confirmation
                    }
                  />
                  <FormFooter>
                    <Button
                      fullWidth
                      type="submit"
                      variant="primary"
                      isLoading={isLoading}
                    >
                      Create new account
                    </Button>
                  </FormFooter>
                </CardBody>
              </Card>
            )}
          </Formik>
          <Box center muted mt={3}>
            Already have account? <Link to="/signin">Sign in</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
