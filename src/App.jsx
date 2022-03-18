import './App.css';
import { Header } from './components/Header';
import { Slidder } from './components/slidder/Slidder';
import { Grid } from './components/grid/Grid'
import { Footer } from './components/Footer';
import { ProductCategories } from './components/categories/ProductCategories';

function App() {


  return (
    <div className="App">
        <Header/>
        <Slidder/>
        <ProductCategories/>
        <Grid/> 
        <Footer/>
    </div>
  );
}

export default App;
