import styled from "@emotion/styled";

const Quantity = styled.select`
  outline: 2px solid var(--extralight-gray);
  border: none;
  border-radius: 8px;
  width: 100%;
  color: var(--gray);
  margin: 20px auto;
`;

const Select = ({ stock }) => {
  return (
    <Quantity name="quantity" id="quantity">
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

export default Select;
