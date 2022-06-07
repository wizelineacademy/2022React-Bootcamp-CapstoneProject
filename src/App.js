import './App.css';
import PageRouter from './components/PageRouter.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {

  return (
    <div className="App">
      <Header />
      <PageRouter />
      <Footer />
    </div>
  );
}

export default App;
