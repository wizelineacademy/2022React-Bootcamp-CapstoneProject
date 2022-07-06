import { useContext, useState } from "react";
import Confetti from "react-confetti";
import { Formik } from "formik";
import { Container, SectionHeading } from "./../../styled-components";
import { checkoutValues, checkoutSchema } from "../../validation";
import { ResumeGridItems, FormCheckout } from "../../components/checkout";
import { getSubtotal } from "./../../utils/getSubtotal";
import { ShopContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { WrapperResume, RowInfo, RowCart, TotalSection, Total } from "./styled";

const CheckoutPage = () => {
  const { cart, clearShoppingCart } = useContext(ShopContext);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const closeOrder = () => {
    try {
      clearShoppingCart();
      setIsChecked(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      {isChecked && <Confetti />}
      <SectionHeading>Checkout</SectionHeading>
      <WrapperResume>
        <RowInfo>
          <Formik
            initialValues={checkoutValues}
            validationSchema={checkoutSchema}
            onSubmit={(values) => closeOrder(values)}
          >
            <FormCheckout />
          </Formik>
        </RowInfo>
        <RowCart>
          <ResumeGridItems />
          <TotalSection>
            Total
            <Total>
              USD
              <span>${getSubtotal(cart)}</span>
            </Total>
          </TotalSection>
        </RowCart>
      </WrapperResume>
    </Container>
  );
};

export default CheckoutPage;
