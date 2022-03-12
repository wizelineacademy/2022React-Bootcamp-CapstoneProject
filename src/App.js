import './components/css/navbar.css';
import './components/css/styles.css';
import './components/css/grid.css';
import './components/css/footer.css';

import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import { NavBar } from './components/navbar';
import { BodyDiv } from './components/body';
import { FootDiv } from './components/footer';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <NavBar />
      <BodyDiv />
      <FootDiv /> 
    </div>
  );
}

export default App;

