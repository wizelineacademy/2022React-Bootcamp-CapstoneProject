import styled from 'styled-components';
const SearchInput = styled.input`
  float: left;
  display: flex;
  color: #f2f2f2;
  text-align: center;
  padding-top: 5%;
  text-decoration: none;
  font-size: 11px;
  height: 4vh;
  margin-top: 6%;
  border-radius: 20px;
  color: black;
  @media (max-width: 600px) {
    display: none;
  }
`;

export default SearchInput;
