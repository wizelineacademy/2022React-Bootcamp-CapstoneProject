import { useContext } from "react";
import styled from "@emotion/styled";
import { Button } from "../../../styled-components/Button";
import { Menu } from "./../../icons";
import { NavbarContext } from "./../../../context";

const ButtonContainer = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuButton = () => {
  const { active, setVisible } = useContext(NavbarContext);

  return (
    <>
      <ButtonContainer>
        <Button onClick={() => setVisible(!active)}>
          <Menu fill="#FFF" />
        </Button>
      </ButtonContainer>
    </>
  );
};

export default MenuButton;
