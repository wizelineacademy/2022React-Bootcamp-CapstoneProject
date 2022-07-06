import styled from "@emotion/styled";

export const WrapperResume = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: 10px;
  padding: 30px;

  @media (min-width: 680px) {
    flex-direction: row;
  }
`;

export const RowInfo = styled.div`
  background-color: white;
  flex: 1;shipping for
  border-right: 1px solid var(--extralight-gray);
`;

export const RowCart = styled.div`
  background-color: #fafafa;
  flex: 1;
`;

export const closeOrder = () => {
  console.log("order closed");
};

export const TotalSection = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  color: var(--light-gray);
  span {
    font-size: 24px;
    color: black;
  }
`;
