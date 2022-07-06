import PropTypes from "prop-types";
import { Quantity } from "./styled";

const Select = ({ stock, setQuantity, quantity }) => {
  return (
    <Quantity
      name="quantity"
      id="quantity"
      onChange={(e) => setQuantity(parseInt(e.target.value))}
      value={quantity ?? 1}
    >
      <option value="" disabled>
        --Select a quantity--
      </option>
      {[...Array(stock)].map((x, i) => (
        <option key={i} value={i + 1}>
          {i + 1} units
        </option>
      ))}
    </Quantity>
  );
};

Select.propTypes = {
  stock: PropTypes.number.isRequired,
};

export default Select;
