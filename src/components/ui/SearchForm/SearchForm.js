import { Button, InputField } from "./../../../styled-components";
import styled from "@emotion/styled";
import { Search } from "./../../icons";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchForm = () => {
  return (
    <FormContainer>
      <InputField type="text" placeholder="Search" />
      <Button type="submit">
        <Search fill="#FFF" width="25px" height="25px" />
      </Button>
    </FormContainer>
  );
};

export default SearchForm;
