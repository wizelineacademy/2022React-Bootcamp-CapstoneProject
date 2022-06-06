import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import styled, {ThemeProvider} from 'styled-components';
import theme from './themes';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

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

const HeaderContainer = styled(MainContainer)`
  min-height: 40px;
`;

const ContentContainer = styled(MainContainer)`
  flex: 1;
`;

const FooterContainer = styled(MainContainer)`
  min-height: 10px;
`;

const App = () => {
  // const { data, isLoading } = useFeaturedBanners();
  const {isLoading} = useFeaturedBanners();

  if (isLoading) {
    return (
      <LoadingView>
        <span>Loading...</span>
      </LoadingView>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <HeaderContainer>
          <Header/>
        </HeaderContainer>
        <ContentContainer>
          <Home/>
        </ContentContainer>
        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
