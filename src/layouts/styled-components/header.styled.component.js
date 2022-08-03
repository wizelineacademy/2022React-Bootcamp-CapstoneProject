import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainHeader = styled.header`
  box-shadow: rgba(58, 53, 65, 0.42) 0px 4px 8px -4px;
  background-image: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: sticky;
  z-index: 1100;
  top: 0px;
  left: auto;
  right: 0px;
  -moz-box-align: center;
  align-items: center;
  color: rgba(58, 53, 65, 0.87);
  -moz-box-pack: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.85);
  transition: border-bottom 0.2s ease-in-out 0s,
    backdrop-filter 0.25s ease-in-out 0s, box-shadow 0.25s ease-in-out 0s;
`;

export const LayoutNavbar = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(58, 53, 65, 0.12);
  color: rgba(58, 53, 65, 0.87);
`;

export const Toolbar = styled.div`
  max-width: 1440px;
  position: relative;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  width: 100%;
  padding: 0rem 1.5rem !important;
  margin-left: auto;
  margin-right: auto;
  min-height: 63px !important;
  color: rgba(58, 53, 65, 0.87);
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: justify;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  display: flex;
  -moz-box-align: center;
  align-items: center;
  text-decoration: none;
  margin-right: 2rem;
  cursor: pointer;
`;

const colorBrand = 'rgb(0, 171, 85)';
const rad = '8px';
const height = '3rem';
const colorDark = '#2f2f2f';
const dur = '.3s';
const bez = 'cubic-bezier(0, 0, 0.43, 1.49)';
const btnWidth = '3rem';

export const WrapperSearch = styled.div`
  display: flex;
  position: relative;
  width: 16rem;
  border-radius: ${rad};
  box-sizing: border-box;
  background: ${colorBrand};
`;

export const Input = styled.input`
  height: ${height};
  border-color: rgba(145, 158, 171, 0.32) !important;
  border-width: 1px !important;
  background: #fff;
  color: ${colorDark};
  outline: 0; // <-- shold probably remove this for better accessibility, 
    // adding for demo aesthetics for now.
  width: 100%;
  padding: 2.5px 4px 2.5px 6px;
  border-radius: ${rad};
  appearance: none;
  transition: all ${dur} ${bez};
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
  line-height: 1.4375em;
  font-size: 0.85rem;
  color: rgb(33, 43, 54);
  cursor: text;
  font-weight: 500;
  &:not(:placeholder-shown){
    border-radius: ${rad} 0 0 ${rad};
    width: calc(100% - ${btnWidth});
    + button {
      display: inline-flex;
    }
  }
`;

export const ButtonGo = styled.button`
  height: ${height};
  border: 0px none;
  color: ${colorDark};
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: ${btnWidth};
  font-weight: 700;
  background: ${colorBrand};
  border-radius: 0 ${rad} ${rad} 0;
  box-shadow: rgba(0, 171, 85, 0.24) 0px 8px 16px 0px;
  color: rgb(255, 255, 255);
  padding: 6px 16px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  line-height: 1.71429;
  font-size: 0.875rem;
`;

export const RightBox = styled.div`
    display: flex;
    -moz-box-align: center;
    align-items: center;
`;

export const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 22px;
  height: 22px;

  :hover & {
    fill: rebeccapurple;
  }
`;