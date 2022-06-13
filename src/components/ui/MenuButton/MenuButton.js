import { Button } from "../../../styled-components/Button";
import { Menu } from "./../../icons";
import styled from "@emotion/styled";
import { useState } from "react";
import { NavbarSmallScreen } from "../../common";

const ButtonContainer = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuButton = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <ButtonContainer>
        <Button onClick={handleMenuActive}>
          <Menu fill="#FFF" />
        </Button>
      </ButtonContainer>
      <NavbarSmallScreen
        menuActive={menuActive}
        handleMenuActive={setMenuActive}
      />
    </>
  );
};

export default MenuButton;
