import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { Form, FormikProvider } from "formik";
import { MdRemove, MdAdd, MdAddShoppingCart } from "react-icons/md";
// components
import {
  BoxButtons,
  BoxInput,
  ButtonAddToCart,
  ButtonControlQty,
  Category,
  Divider,
  Label,
  Price,
  QuantityBox,
  Sku,
  SpanQty,
  Stock,
  Tag,
  Title,
} from "../styled-components";
//
import { fCurrency } from "../../../utils";

// ----------------------------------------------------------------------

const ProductInfo = ({ product }) => {
  const formik = useFormik({
    initialValues: {
      qty: 1,
    },
    onSubmit: async (values) => {
      // console.log("🚀 ~ file: ProductInfo.jsx ~ line 35 ~ onSubmit: ~ values", values)
      handleResetForm();
    },
  });

  const { resetForm, values } = formik;
  const [qty, setQty] = useState(1);

  const handleResetForm = () => {
    resetForm();
  };

  const handleAddQty = (values) => {
    values.qty += 1;
    setQty(values.qty);
  };

  const handleDecrementQty = (values) => {
    values.qty -= 1;
    setQty(values.qty);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate>
        <Sku>{product.sku}</Sku>
        <Title>{product.name}</Title>
        <Category>{product.category}</Category>
        <Price>{fCurrency(product.price)}</Price>
        {product &&
          product.tags?.map((tag, index) => (
            <Tag key={`${tag}-${index}`}>{tag}</Tag>
          ))}
        <Divider />
        <QuantityBox>
          <Label>Quantity</Label>
          <div>
            <BoxInput>
              <ButtonControlQty
                type='button'
                // role="button"
                onClick={() => handleDecrementQty(values)}
                className={`${values.qty <= 1 ? "disabled" : ""}`}
                disabled={values.qty <= 1 ? true : false}
              >
                <MdRemove />
              </ButtonControlQty>
              <SpanQty>{qty}</SpanQty>
              <ButtonControlQty
                type='button'
                // role="button"
                onClick={() => handleAddQty(values)}
                className={`${values.qty >= product.stock ? "disabled" : ""}`}
                disabled={values.qty >= product.stock ? true : false}
              >
                <MdAdd />
              </ButtonControlQty>
            </BoxInput>
            <Stock>Available: {product.stock}</Stock>
          </div>
        </QuantityBox>
        <Divider />
        <BoxButtons>
          <ButtonAddToCart type="submit">
            <MdAddShoppingCart />
            Add to cart
          </ButtonAddToCart>
        </BoxButtons>
      </Form>
    </FormikProvider>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default ProductInfo;
