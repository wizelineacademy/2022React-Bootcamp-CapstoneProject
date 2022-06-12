import styled from "@emotion/styled";

export const InputField = styled.input`
  padding: 12px 10px;
  border: 1px solid var(--extralight-gray);
  font-size: 15px;
  color: var(--light-gray);
  &::placeholder {
    font-weight: 400;
    color: var(--light-gray);
    font-size: 18px;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 13px 1px rgba(26, 177, 235, 1);
  }
`;
