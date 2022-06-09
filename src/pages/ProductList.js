import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoriesMock from '../mocks/en-us/product-categories.json';
import logoSideBar from '../assets/logo-responsive.png';
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
import { Products } from '../components/Products';
import { Col, Row } from '../styles/Home.style';

const ProductList = (props) => {
  const searchRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('Furniture');
  const [loading, setLoading] = useState(false);
  const searchClickHandler = () => {
    console.log('searchRef', searchRef.current.value);
  };

  function triggerLoading() {
    let timerId;
    timerId = setTimeout(() => {
      setLoading(false);
      console.log('loading en list en funcion', loading);
    }, 1000);

    return () => clearTimeout(timerId);
  }

  const changeCategory = (name) => {
    setLoading(true);
    setSelectedCategory(name);
    triggerLoading();
  };

  console.log('loading en list', loading);

  return (
    <div>
      <Row>
        <Col lg="3" md="3" sm="6" xs="7">
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
              <SLinkContainer
                onClick={() => changeCategory(name)}
                style={{
                  backgroundColor:
                    name === selectedCategory ? '#e6e6e6' : 'white',
                }}
              >
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
                        src={
                          'https://img.icons8.com/dotty/80/undefined/light.png'
                        }
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
                          'https://img.icons8.com/ios/50/undefined/lounge.png'
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
        </Col>
        <Col lg="9" md="9" sm="6" xs="5">
          <Products category={selectedCategory} loadingProp={loading} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductList;
