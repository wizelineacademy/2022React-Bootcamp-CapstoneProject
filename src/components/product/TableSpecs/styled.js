import styled from "@emotion/styled";

export const Table = styled.table`
  width: 100%;
  margin-top: 40px;

  th {
    background-color: #f2f2f2;
    font-size: 22px;
    font-weight: 400;
  }

  th,
  td {
    border: 1px solid #ddd;
  }

  tr:nth-of-type(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  td {
    font-size: 20px;
  }
`;
