import React from "react";
import logo from "icons/logo.svg";
import { LogoImage, LogoLink } from "./Logo.styled";
import { MAIN_ROUTE } from "utils/routes";

const Logo = () => (
  <LogoLink href={MAIN_ROUTE} id="logo">
    <LogoImage alt="logo" src={logo} />
  </LogoLink>
);

export default Logo;
