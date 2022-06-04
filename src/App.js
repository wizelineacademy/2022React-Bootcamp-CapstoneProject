import Header from './components/Header/Header';
import Slideshow from './components/Slideshow/Slideshow';
import Footer from './components/Footer/Footer';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header/>
      <Slideshow/>
      <Footer/>
    </div>
  );
}

export default App;
