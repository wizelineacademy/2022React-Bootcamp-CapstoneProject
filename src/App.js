import {useState} from 'react';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import styled, {ThemeProvider} from 'styled-components';
import theme from './themes';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';

const LoadingView = styled.div`
  min-width: 100%;
  min-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledApp = styled.div`
    height: 100%;
    min-height: 100%;
    min-width: 350px;
    
	  display: flex;
	  flex-direction: column;
    flex-wrap: nowrap;
  `;

const MainContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled(MainContainer)`
  flex: 1;
`;

const App = () => {
  // const { data, isLoading } = useFeaturedBanners();
  const {isLoading} = useFeaturedBanners();
  const [isHomeDisplayed, setIsHomeDisplayed] = useState(false)

  if (isLoading) {
    return (
      <LoadingView>
        <span>Loading...</span>
      </LoadingView>
    );
  }

  const navigateHome = () => {
    setIsHomeDisplayed(true);
  };
  const navigateProducts = () => {
    setIsHomeDisplayed(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <MainContainer>
          <Header 
            navigateHome={navigateHome}
          />
        </MainContainer>
        <ContentContainer>
          {
            isHomeDisplayed 
            ? 
              <Home 
                navigateProducts={navigateProducts}
              />
            : <Products/>
          }
        </ContentContainer>
        <MainContainer>
          <Footer/>
        </MainContainer>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
