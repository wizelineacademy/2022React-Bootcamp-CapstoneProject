import React from "react";
import PropTypes from "prop-types";

const ProductQuantityControl = ({ updateQuantity, quantity, title }) => {
  const handleUpdateQuantity = (action) => {
    updateQuantity(action);
  };

  return (
    <div className="quantity-control_info_item">
      {title && <div className="quantity-control_info_item_title">{title}</div>}
      <div className="quantity-control_info_item_quantity">
        <div
          className="quantity-control_info_item_quantity_btn_minus"
          onClick={() => handleUpdateQuantity("minus")}
        >
          <i className="bx bx-minus" />
        </div>
        <div className="quantity-control_info_item_quantity_input">
          {quantity}
        </div>
        <div
          className="quantity-control_info_item_quantity_btn_add"
          onClick={() => handleUpdateQuantity("plus")}
        >
          <i className="bx bx-plus" />
        </div>
      </div>
    </div>
  );
};

ProductQuantityControl.propTypes = {
  updateQuantity: PropTypes.func,
  quantity: PropTypes.number,
  title: PropTypes.string,
};

export default ProductQuantityControl;
