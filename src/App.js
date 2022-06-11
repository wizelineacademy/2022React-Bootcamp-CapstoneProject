import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList/ProductList";
import { useState } from "react";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  const [component, setComponent] = useState("home");
  const renderComponent = {
    home: <Home selectComponent={setComponent} />,
    pl: <ProductList />,
  };

  return (
    <div className="App">
      <HeaderComponent selectComponent={setComponent} />
      {renderComponent[component]}
      <FooterComponent />
    </div>
  );
}

export default App;
