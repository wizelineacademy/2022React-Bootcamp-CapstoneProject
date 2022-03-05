import logo from "./logo.svg";
import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className='App'>
      <header className='App-header'>app</header>
    </div>
  );
}

export default App;
