// import logo from './logo.svg';
import './App.css';
import CartWidget from './components/CartWidget';
import Footer from './layouts/Footer/Footer';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <CartWidget />
      <MainLayout />
      <Footer />
    </div>
  );
}

export default App;
