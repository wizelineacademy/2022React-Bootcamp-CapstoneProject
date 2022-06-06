import { Header, Footer, Slider, Banners, GridProducts } from '../components'
import { GlobalStyles } from '../styles/global';

const Home = () => {

	return (
		<>
			<GlobalStyles />
			<Header/>
			<section>
				<Slider/>
				<hr />
				<Banners />
				<hr />
				<GridProducts />
				<hr />
			</section>
			<Footer/>
		</>
	 );
}

export default Home;