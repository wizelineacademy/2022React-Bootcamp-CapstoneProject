import { NavLink } from 'react-router-dom';
import { Slider, Banners, GridProducts } from '../components';

function Home() {
  return (
    <section>
      <Slider />
      <hr />
      <Banners />
      <hr />
      <GridProducts />
      <hr />
      <NavLink to="/products/all" className="btn">
        View all products
      </NavLink>
    </section>
  );
}

export default Home;
