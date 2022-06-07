import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
  
export default App;
