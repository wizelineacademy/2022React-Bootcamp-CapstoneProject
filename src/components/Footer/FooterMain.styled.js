import styled from 'styled-components';
import { bluePrince, yellowMain } from '../../utils/constant.styles';

const FooterMain = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5rem;
  background: ${yellowMain};
  font-size: .8rem;
  color: ${bluePrince};
  margin: 4rem auto 0;
`;

export default FooterMain;
