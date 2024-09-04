import * as yup from "yup";

export namespace SignUpValidation {
  export type Inputs = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };

  export const schema = yup.object().shape({
    name: yup
      .string()
      .required("User name is required")
      .min(6, "At least six characters"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "At least six characters"),
    password_confirmation: yup
      .string()
      .required("Password is required")
      .oneOf([yup.ref("password")], "The passwords do not match.")
      .min(6, "At least six characters"),
  });
}
