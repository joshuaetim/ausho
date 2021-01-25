import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Link } from "react-router-dom";

import Box from "../../components/box";
import Card from "../../components/card";
import Form from "../../components/form";
import Button from "../../components/button";
import { useLogin } from "../../store/api/auth";
import CardBody from "../../components/card-body";
import Container from "../../components/container";
import TextField from "../../components/textfield";
import CardTitle from "../../components/card-title";
import FormFooter from "../../components/form-footer";

const initialValues = {
  email: "arpeiks@gmail.com",
  password: "password"
};

const schema = Yup.object({
  email: Yup.string()
    .trim()
    .email()
    .required(),
  password: Yup.string()
    .min(8)
    .required()
});

const Signin = () => {
  const [values, setValues] = React.useState({ initialValues });
  const { refetch, isFetching } = useLogin(values);

  const handleSubmit = async values => {
    setValues(values);
    await refetch();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
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
              <Card as={Form} onSubmit={handleSubmit} width="md">
                <CardBody>
                  <CardTitle mb={4} center>
                    Login to your account
                  </CardTitle>
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

                  <Link to="/password">I forgot my password</Link>

                  <FormFooter>
                    <Button
                      fullWidth
                      type="submit"
                      variant="primary"
                      disabled={isFetching}
                      isLoading={isFetching}
                    >
                      Login
                    </Button>
                  </FormFooter>
                </CardBody>
              </Card>
              <Box center muted mt={3}>
                Don't have account yet? <Link to="/signup">Sign up</Link>
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </Formik>
  );
};

export default Signin;
