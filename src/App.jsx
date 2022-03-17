import './App.css';
import {Test} from "./components/Test";
import { Header } from './components/Header';
import { Slidder } from './components/slidder/Slidder';
import { Grid } from './components/grid/Grid'
import { Footer } from './components/Footer';

function App() {


  return (
    <div className="App">
        <Header/>
        <Test/>
        <Slidder/>
        <Grid/> 
        <Footer/>
    </div>
  );
}

export default App;
