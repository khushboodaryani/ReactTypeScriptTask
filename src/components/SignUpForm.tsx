import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

// Define the TypeScript interface for form values
interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

// Define the initial form values
const initialValues: SignUpFormValues = {
  name: "",
  email: "",
  password: "",
};

// Define the validation schema using Yup
const signUpSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

// SignUpForm component
const SignUpForm: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={(values, { resetForm }) => {
        alert("Sign Up Successful");
        resetForm();
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          {/* Name Field */}
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          {touched.name && errors.name && (
            <div id="nameError" aria-live="polite">
              {errors.name}
            </div>
          )}

          {/* Email Field */}
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          {touched.email && errors.email && (
            <div id="emailError" aria-live="polite">
              {errors.email}
            </div>
          )}

          {/* Password Field */}
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <PasswordStrengthIndicator password={values.password} />
          {touched.password && errors.password && (
            <div id="passwordError" aria-live="polite">
              {errors.password}
            </div>
          )}

          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
