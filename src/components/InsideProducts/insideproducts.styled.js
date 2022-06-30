import styled from 'styled-components';
import { device } from '../../styles/mediaquery';

export const Wrapper = styled.section`
  display: grid;
  width: 100%;
  max-width: var(--max-width);
  -ms-grid-columns: minmax(49%, auto) minmax(49%, auto);
  grid-template-columns: repeat(2, minmax(45%, auto));
  gap: 5px;

  @media only screen and ${device.tablet} {
    .products & {
      -ms-grid-columns: minmax(33%, auto) minmax(33% auto) minmax(33% auto);
      grid-template-columns: repeat(3, minmax(33%, auto));
      gap: 5px;
      margin: 0 auto;
    }
  }

  @media only screen and ${device.laptop} {
    .products & {
      display: grid;
      -ms-grid-columns: minmax(24%, auto) minmax(24%, auto) minmax(24%, auto)
        minmax(24%, auto);
      grid-template-columns: repeat(4, minmax(24%, auto));
      gap: 5px;
      margin: 0 auto 10px;
    }
  }
`;

export default Wrapper;
