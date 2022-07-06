import styled from "@emotion/styled";

export const FieldContainer = styled.div`
  margin: 10px auto;
`;

export const Textarea = styled.textarea`
  padding: 12px 16px;
  width: 100%;
  display: block;
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
    box-shadow: 0px 0px 5px 1px rgba(26, 177, 235, 1);
  }
`;

export const Label = styled.label`
  display: block;
  color: var(--gray);
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 10px;
`;
