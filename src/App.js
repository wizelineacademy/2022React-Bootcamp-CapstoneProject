import { Home, ProductList } from "./pages";
import { PageTemplate } from "./templates";
import { useState } from "react";

function App() {
  const [isHome, setIsHome] = useState(true);

  const handleNavigate = (band) => {
    setIsHome(band);
  };

  return (
    <PageTemplate handleNavigate={handleNavigate}>
      {isHome ? <Home handleNavigate={handleNavigate} /> : <ProductList />}
    </PageTemplate>
  );
}

export default App;
