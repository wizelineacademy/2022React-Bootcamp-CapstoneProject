import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Header from './pages/header/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
