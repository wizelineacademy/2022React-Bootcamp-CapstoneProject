import Logo from "./oso1.png";
import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <div className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <header className="Home-title">Bear Ecommerce</header>
      </div>
      <div className="App-body">
        <p className="paragraph-title">Bienvenidos a Bear Ecommerce</p>
      </div>
      <div className="App-footer">
        <p className="Footer-title">Este es el footer</p>
      </div>
    </div>
  );
}

export default App;
