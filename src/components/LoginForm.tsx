import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Validation schema for the login form
const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm: React.FC = () => {
  const [rememberedEmail, setRememberedEmail] = useLocalStorage<string>("rememberEmail", "");

  return (
    <div className="login-form-container">
      <Formik
        initialValues={{
          email: rememberedEmail || "",
          password: "",
          rememberMe: !!rememberedEmail,
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { resetForm }) => {
          alert("Login Successful");
          if (values.rememberMe) {
            setRememberedEmail(values.email);
            resetForm({ values: { ...values, email: values.email } });
          } else {
            setRememberedEmail("");
            resetForm();
          }
        }}
      >
        {({ values }) => (
          <Form className="login-form">
            <h2>Login</h2>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" placeholder="Enter your password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="input-group remember-me">
              <label>
                <Field type="checkbox" name="rememberMe" />
                Remember Me
              </label>
            </div>

            <button type="submit" className="submit-button">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
