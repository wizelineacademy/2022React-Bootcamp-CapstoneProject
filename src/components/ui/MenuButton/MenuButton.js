import { Button } from "../../../styled-components/Button";
import { Menu } from "./../../icons";
import styled from "@emotion/styled";
import { useState } from "react";
import { NavbarSmallScreen } from "../../common";

const ButonContainer = styled.div`
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
      <ButonContainer>
        <Button onClick={handleMenuActive}>
          <Menu fill="#FFF" />
        </Button>
      </ButonContainer>
      <NavbarSmallScreen
        menuActive={menuActive}
        handleMenuActive={setMenuActive}
      />
    </>
  );
};

export default MenuButton;
