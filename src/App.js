import "./App.css";
import Home from "./pages/Home/Home";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return <Home />;
}

export default App;
