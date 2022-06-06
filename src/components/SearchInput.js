import styled from "styled-components";

const StyledSearchinput = styled.input`
    min-width: 120px;
`;

const SearchInput = () => {
    return (
        <StyledSearchinput 
            type="text"
            placeholder="Enter a search query"
            disabled
        />
    );
};

export default SearchInput;