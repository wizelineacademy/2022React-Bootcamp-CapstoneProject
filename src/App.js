import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./pages/Home";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <HeaderComponent />
      <Home />
      <FooterComponent />
    </div>
  );
}

export default App;
