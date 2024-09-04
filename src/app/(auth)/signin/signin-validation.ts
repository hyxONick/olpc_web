import * as yup from "yup";

export namespace SignInValidation {
  export type Inputs = {
    email: string;
    password: string;
  };

  export const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "At last six characters"),
  });
}
