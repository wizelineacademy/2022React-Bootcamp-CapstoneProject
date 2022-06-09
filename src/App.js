import Header from './components/Header/Header';
import Slideshow from './components/Slideshow/Slideshow';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slideshow/>
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
