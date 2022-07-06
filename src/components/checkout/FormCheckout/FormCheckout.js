import { Form } from "formik";
import { Field, TextareaField } from "./../../form";
import { ActionsContainer, BackLink } from "./styled";
import { ChevronLeft } from "./../../icons";
import { Button } from "../../../styled-components";

export const FormCheckout = () => {
  return (
    <Form>
      <Field name="name" label="name" placeholder="your name" />
      <Field
        name="email"
        type="email"
        label="email"
        placeholder="email@example.com"
      />
      <Field name="zip" label="zip" placeholder="zip/post code" />
      <TextareaField name="notes" label="notes" placeholder="write..." />
      <ActionsContainer>
        <Button type="submit">Checkout</Button>
        <BackLink to="/cart">
          <ChevronLeft /> Back to cart
        </BackLink>
      </ActionsContainer>
    </Form>
  );
};
