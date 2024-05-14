import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your first name"),
  lname: Yup.string().min(3).max(25).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(3).required("Please enter your password"),
  cpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must be match"),
});