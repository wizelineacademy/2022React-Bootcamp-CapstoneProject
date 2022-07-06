import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Quantity = styled.select`
  outline: 2px solid var(--extralight-gray);
  font-size: 20px;
  border: none;
  border-radius: 8px;
  width: 100%;
  color: var(--gray);
  margin: 20px auto;
`;

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
