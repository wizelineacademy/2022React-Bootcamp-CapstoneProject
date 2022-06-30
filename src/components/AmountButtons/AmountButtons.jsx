import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Wrapper } from './amountbuttons.styled';

// eslint-disable-next-line react/prop-types
function AmountButtons({ increase, decrease, amount }) {
  return (
    <Wrapper className="amount-btsn">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
}

export default AmountButtons;
