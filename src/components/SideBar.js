import React, { useRef, useState } from 'react';
import CategoriesMock from '../mocks/en-us/product-categories.json';
import { ChevronLeft } from '@styled-icons/entypo/ChevronLeft';
import logoSideBar from '../assets/logo-responsive.png';
import { Link } from 'react-router-dom';
import { Col, Row } from '../styles/Home.style';
import {
  SSidebar,
  LogoSBar,
  SidebarButton,
  Divider,
  SLinkContainer,
  SLink,
  SLinkIcon,
  SLinkLabel,
  SearchInputSB,
  SSearchIcon,
  SSearch,
  SFooter,
} from '../styles/SideBar.style';

const Sidebar = () => {
  const searchRef = useRef(null);

  const searchClickHandler = () => {
    console.log('searchRef', searchRef.current.value);
  };
  const changeCategory = (name) => {
    console.log('category name', name);
  };

  return (
    /* This page is not used yet. I am wating for implementing redux in delivery 3 */
    <SSidebar isOpen={true}>
      <Row centered>
        <LogoSBar>
          <Link to="/">
            <img src={logoSideBar} alt="logo" />
          </Link>
        </LogoSBar>
      </Row>
      <SSearch onClick={searchClickHandler}>
        <SSearchIcon>
          <img src="https://img.icons8.com/ios-glyphs/30/undefined/search--v1.png" />
          <input ref={searchRef} placeholder="Search" />
        </SSearchIcon>
      </SSearch>
      <Divider />

      {CategoriesMock.results.map(({ data: { main_image, name } }) => (
        <SLinkContainer onClick={() => changeCategory(name)}>
          <SLink>
            <SLinkIcon>
              {main_image.alt === 'Bath' && (
                <img
                  src={
                    'https://img.icons8.com/dotty/80/undefined/shower-and-tub.png'
                  }
                />
              )}
              {main_image.alt === 'Lighting' && (
                <img
                  src={'https://img.icons8.com/dotty/80/undefined/light.png'}
                />
              )}
              {main_image.alt === 'Kitchen' && (
                <img
                  src={
                    'https://img.icons8.com/ios/50/undefined/kitchenwares.png'
                  }
                />
              )}
              {main_image.alt === 'Furniture' && (
                <img
                  src={
                    'https://img.icons8.com/cotton/64/undefined/bath--v2.png'
                  }
                />
              )}
              {main_image.alt === 'Decorate & Organize' && (
                <img
                  src={
                    'https://img.icons8.com/ios/50/undefined/home-decorations.png'
                  }
                />
              )}

              <SLinkLabel>{name}</SLinkLabel>
            </SLinkIcon>
          </SLink>
        </SLinkContainer>
      ))}
      <Divider />
      <SFooter>
        <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
      </SFooter>
    </SSidebar>
  );
};

export default Sidebar;
