import styled from "@emotion/styled";

export const Heading = styled.header`
  position: fixed;
  top: 0;
  z-index: 30;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  padding: 15px 30px;
  transition: all ease-in-out 0.3s;
  border-bottom: 1px solid var(--extralight-gray);

  @media (min-width: 768px) {
    padding: 20px 50px;
  }

  @media (min-width: 405px) {
    justify-content: space-between;
    gap: 1px;
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
