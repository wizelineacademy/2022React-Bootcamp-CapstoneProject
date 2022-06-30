import styled from 'styled-components';
import { device } from '../../styles/mediaquery';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  background-color: var(--clr-grey-1);
  max-width: var(--max-width);

  .products {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10px 10px;
  }

  @media only screen and ${device.laptop} {
    flex-direction: row;
    .products {
      width: 80%;
      padding: 0 0 10px;
    }
  }
`;

export default Wrapper;
