import { Footer, Header } from './components';
import HomePage from './pages/home/HomePage';
import { Container, GlobalStyle } from './styles';

function App() {
    //   const { data, isLoading } = useFeaturedBanners();
    //   console.log(data, isLoading);

    return (
        <div className="App">
            <GlobalStyle />
            <Container container>
                <Header />
                <HomePage />
                <Footer />
            </Container>

        </div>
    );
}

export default App;
