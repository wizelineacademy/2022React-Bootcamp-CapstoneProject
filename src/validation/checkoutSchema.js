import * as Yup from "yup";

export const checkoutSchema = () => {
  return Yup.object({
    name: Yup.string().required("Enter a name"),
    email: Yup.string().email("Enter a valid email").required("Enter a email"),
    zip: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, "Must be exactly 5 digits")
      .max(5, "Must be exactly 5 digits"),
    notes: Yup.string()
      .min(10, "min 10 characters")
      .max(5000, "max 120 characters"),
  });
};

const checkoutValues = {
  name: "",
  email: "",
  zip: "",
  notes: "",
};

export { checkoutValues };

export default checkoutSchema;
