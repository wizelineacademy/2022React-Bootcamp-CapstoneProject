import styled from 'styled-components';

const PricePill = styled.span`
  background-color: #FFE5B4;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  @media (max-width: 550px) {
  font-size: 3vw;
  padding: 5px 10px;
  margin: 0;
  }
}`;

export default PricePill;
