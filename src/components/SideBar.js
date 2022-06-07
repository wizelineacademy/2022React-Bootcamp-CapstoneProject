import React, { useRef, useState } from 'react';
import CategoriesMock from '../mocks/en-us/product-categories.json';
import { ChevronLeft } from '@styled-icons/entypo/ChevronLeft';
import logoSideBar from '../assets/logo-responsive.png';
import { Link } from 'react-router-dom';
import { Row } from '../styles/Home.style';
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      console.log('searchRef', searchRef.current.value);
    }
  };

  return (
    <SSidebar isOpen={sidebarOpen}>
      <SidebarButton
        isOpen={sidebarOpen}
        onClick={() => setSidebarOpen((p) => !p)}
      >
        <ChevronLeft />
      </SidebarButton>
      <Row centered>
        <LogoSBar>
          <Link to="/">
            <img src={logoSideBar} alt="logo" />
          </Link>
        </LogoSBar>
      </Row>
      <Row centered>
        <SSearch
          onClick={searchClickHandler}
          style={!sidebarOpen ? { width: `fit-content` } : {}}
        >
          <SSearchIcon>
            <img src="https://img.icons8.com/ios-glyphs/30/undefined/search--v1.png" />

            <input
              ref={searchRef}
              placeholder="Search"
              style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
            />
          </SSearchIcon>
        </SSearch>
      </Row>
      <Divider />

      {CategoriesMock.results.map(({ data: { main_image, name } }) => (
        <SLinkContainer>
          <SLink style={!sidebarOpen ? { width: `fit-content` } : {}}>
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

              {sidebarOpen && <SLinkLabel>{name}</SLinkLabel>}
            </SLinkIcon>
          </SLink>
        </SLinkContainer>
      ))}
      <Divider />
      <SFooter style={!sidebarOpen ? { display: `none` } : {}}>
        <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
      </SFooter>
    </SSidebar>
  );
};

export default Sidebar;
