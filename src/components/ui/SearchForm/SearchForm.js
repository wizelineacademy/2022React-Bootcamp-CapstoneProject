import { Button, InputField } from "./../../../styled-components";
import styled from "@emotion/styled";
import { Search } from "./../../icons";
import { useNavigate, useSearchParams } from "react-router-dom";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  let text = searchParams.get("q") ?? "";

  const handleSearch = (e) => {
    e.preventDefault();

    if (text === "") {
      return;
    }

    navigate(`/search?q=${text}`);
  };

  const handleChange = (event) => {
    setSearchParams({ q: event.target.value });
  };

  return (
    <FormContainer onSubmit={handleSearch}>
      <InputField
        type="text"
        placeholder="Search"
        id="search"
        onChange={handleChange}
        value={text}
      />
      <Button type="submit">
        <Search fill="#FFF" width="25px" height="25px" />
      </Button>
    </FormContainer>
  );
};

export default SearchForm;
