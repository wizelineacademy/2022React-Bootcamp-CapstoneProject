import { Header } from "./components/common/header/header.js"
import { Footer } from "./components/common/footer/footer.js"
import './App.css'
import { CategoryGrid, ProductGrid } from "./components/common/grid.js";
import { Slider } from "./components/common/slider/slider.js";


function App() {
  return (
    <div className="App">
      <Header/>
      <Slider />
      <p className="sectionTitle">Categories</p>
      <CategoryGrid />
      <p className="sectionTitle">Featured Products</p>
      <ProductGrid/>
      <Footer/>
    </div>
  );
}

export default App;
