import styled from 'styled-components';

const CategoryPill = styled.span`
  background-color: #9beaf9;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  @media (max-width: 770px) {
    display: none;
  }
}`;

export default CategoryPill;
