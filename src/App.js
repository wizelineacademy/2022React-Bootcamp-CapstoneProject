import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
