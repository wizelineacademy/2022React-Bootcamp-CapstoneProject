import styled from 'styled-components';

const ProductName = styled.p`
  color: black;
  background-color: rgba(128, 128, 128, 0.5);
  @media (max-width: 650px) {
    display: none;
  }
`;

export default ProductName;
