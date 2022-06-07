import styled from 'styled-components';

export const HomeMain = styled.main`
  display: flex;
  flex-flow: column;
  margin: 50px auto 0;
  width: 135em;
  overflow: hidden;

  @media screen and (max-width: 1400px){
    width: 90%;
  }
`;