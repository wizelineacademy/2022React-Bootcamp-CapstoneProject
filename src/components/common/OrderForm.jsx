import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import { Grid, Button } from ".";

const orderCreate = () => console.log("Create Order");

const OrderForm = () => {
  return (
    <div className="frm_order_info_frm">
      <Formik
        initialValues={{
          clientName: "",
          clientEmail: "",
          clientZipCode: "",
          orderNotes: "",
        }}
      >
        <Form>
          <div className="frm_order_info_frm_input">
            <Field name="clientName" placeholder="Name" />
          </div>
          <div className="frm_order_info_frm_input">
            <Field type="email" name="clientEmail" placeholder="Email" />
          </div>
          <div className="frm_order_info_frm_input">
            <Field name="clientZipCode" placeholder="Zip Code" />
          </div>
          <div className="frm_order_info_frm_input">
            <Field as="textarea" name="orderNotes" placeholder="Order Notes" />
          </div>

          <div>
            <Grid col={2} mdCol={2} smCol={2} gap={1}>
              <Link to="/cart">
                <Button size="sm">Go back to cart</Button>
              </Link>
              <Button size="sm" handler={() => orderCreate()}>
                Place order
              </Button>
            </Grid>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;
