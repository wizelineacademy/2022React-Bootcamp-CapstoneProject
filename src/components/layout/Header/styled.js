import styled from "@emotion/styled";

export const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px 30px;
  transition: all ease-in-out 0.3s;
  border-bottom: 1px solid var(--extralight-gray);

  @media (min-width: 768px) {
    padding: 20px 50px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const NavDeskContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
  }
`;
