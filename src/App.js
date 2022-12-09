// route
import Router from './routes';
import { Provider } from 'react-redux';
// theme
import './App.css';
// components
import ScrollToTop from './components/ScrollToTop';
import CartWidget from './components/CartWidget';
import Footer from './layouts/Footer/Footer';
//
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ScrollToTop />
        <CartWidget />
        <Router />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
