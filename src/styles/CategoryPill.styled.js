import styled from 'styled-components';

const CategoryPill = styled.span`
  background-color: #1F4690;
  border: none;
  color: white;
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
